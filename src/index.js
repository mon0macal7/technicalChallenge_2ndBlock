import { guardarMeta, enlistar } from "./firebase.js";

const formulario = document.getElementById("task-form");
const ficha = document.getElementById("task-container");

window.addEventListener("DOMContentLoaded", async () => {
  const querySnapshot = await enlistar();

  let imprimir = "";
  querySnapshot.forEach((doc) => {
    const nuevo = doc.data();
    imprimir += `<div class="card">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${nuevo.title}</h5>
    <p class="card-text">${nuevo.descripcion}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${nuevo.categoria}</li>
    <li class="list-group-item">${nuevo.fecha}</li>
  </ul>
</div>`;
    //console.log(doc.data());
    //console.log(ficha);
  });
  ficha.innerHTML = imprimir;
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
