import { guardarMeta, enlistar, nuevaMeta, borrarMeta } from "./firebase.js";

const formulario = document.getElementById("task-form");
const ficha = document.getElementById("task-container");

window.addEventListener("DOMContentLoaded", async () => {
  nuevaMeta((querySnapshot) => {
    //const querySnapshot = await enlistar();

    let imprimir = "";
    querySnapshot.forEach((doc) => {
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
  <button style= color:#445cd3; class="btn-borrar" data-id="${doc.id}>
  <i class="fas fa-trash-alt"></i></button>
   </div>
   
   `;
    });
    //console.log(doc.data());
    //console.log(ficha);
    ficha.innerHTML = imprimir;

    const eliminar = ficha.querySelectorAll(".btn-borrar");
    //console.log(eliminar);

    eliminar.forEach((boton) => {
      boton.addEventListener("click", ({ target: { dataset } }) => {
        borrarMeta(dataset.id);
      });
    });
  });
});

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("sumbitted");
  const title = formulario["task-title"];
  const descripcion = formulario["task-description"];
  const categoria = formulario["section"];
  const fecha = formulario["month"];
  console.log(title.value, descripcion.value, categoria.value, fecha.value);

  guardarMeta(title.value, descripcion.value, categoria.value, fecha.value);
});

formulario.reset();
