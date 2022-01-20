import { guardarMeta, enlistar, nuevaMeta, borrarMeta } from "./firebase.js";
// Conexion con el DOM
const formulario = document.getElementById("task-form");
const ficha = document.getElementById("task-container");
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
  </div>
  `;
    });
    //console.log(doc.data());
    //console.log(ficha);
    ficha.innerHTML = imprimir;

    const eliminar = ficha.querySelectorAll(".btn-borrar");
    console.log(eliminar);

    eliminar.forEach((btn) => {
      btn.addEventListener("click", () => {
        console.log("borrando");
      });
    });
  });
});

//Funcion para subir datos a cloud firesore
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("sumbitted");
  const title = formulario["task-title"];
  const descripcion = formulario["task-description"];
  const categoria = formulario["section"];
  const fecha = formulario["month"];
  console.log(title.value, descripcion.value, categoria.value, fecha.value);

  guardarMeta(title.value, descripcion.value, categoria.value, fecha.value);

  formulario.reset();
});
