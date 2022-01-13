import { guardarMeta } from "./firebase.js";

window.addEventListener("DOMContentLoaded", () => {
  console.log("firefire");
});
const formulario = document.getElementById("task-form");

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
