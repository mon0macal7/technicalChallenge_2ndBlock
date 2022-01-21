import {
  guardarMeta,
  enlistar,
  nuevaMeta,
  borrarMeta,
  proposito,
  actualizar,
} from "./firebase.js";

// Se crean variables para guardar el campo del titulo y el formulario
const formulario = document.getElementById("task-form");
const ficha = document.getElementById("task-container");
// variable para editar las tareas
let modificar = false;
// variable  vacía para identificar las tareas
let id = "";

// Se crea funcion para cargar pagina

window.addEventListener("DOMContentLoaded", async () => {
  nuevaMeta((querySnapshot) => {
    //Imprimir cards de manera dinamica trayendo datos de firestore
    let imprimir = "";

    querySnapshot.forEach((doc) => {
      //variable para guardar el objeto creado en firestore
      const nuevo = doc.data();

      imprimir += `<div class="card">
  <img src="/assets/phrase3.png" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${nuevo.title}</h5>
    <p class="card-text">${nuevo.descripcion}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${nuevo.categoria}</li>
    <li class="list-group-item">${nuevo.fecha}</li>
  </ul>
  <button type="button" class="btn-borrar" class="btn btn-outline-info" data-id="${doc.id}">Delete</button>
  <button type="button" class="btn-editar" class="btn btn-outline-info" data-id="${doc.id}">Edit</button>
  </div>
  `;
    });
    //Seleccionar formulario
    ficha.innerHTML = imprimir;
    //Seleccionar botones de las cards
    const eliminar = ficha.querySelectorAll(".btn-borrar");

    //Iterar botones para poder eliminar individualmente cada propósito
    eliminar.forEach((btn) => {
      btn.addEventListener("click", ({ target: { dataset } }) => {
        //Seleccionar  id del objeto en firestore para poder eliminar propósito
        borrarMeta(dataset.id);
      });
    });
    //Se crea variable para editar
    const editar = ficha.querySelectorAll(".btn-editar");

    // Iteracion y promesa mediante async/await
    editar.forEach((btn) => {
      btn.addEventListener("click", async (e) => {
        const doc = await proposito(e.target.dataset.id);
        const tarea = doc.data();

        formulario["task-title"].value = tarea.title;
        formulario["task-description"].value = tarea.descripcion;
        formulario["month"].value = tarea.fecha;

        modificar = true;
        id = doc.id;

        formulario["btn-task-save"].innerText = "Edit";
      });
    });
  });
});

//Funcion para subir datos a cloud firestore
formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = formulario["task-title"];
  const descripcion = formulario["task-description"];
  const categoria = formulario["categoria"];
  const fecha = formulario["month"];
  console.log(title.value, descripcion.value, categoria.value, fecha.value);

  //Condicional para actualizar data de la edicion de cada tarea
  if (!modificar) {
    guardarMeta(title.value, descripcion.value, categoria.value, fecha.value);
  } else {
    actualizar(id, {
      title: title.value,
      description: descripcion.value,
    });

    modificar = false;
    id = "";
    formulario["btn-task-save"].innerText = "Save";
  }

  //Limpiar formulario
  formulario.reset();
});
