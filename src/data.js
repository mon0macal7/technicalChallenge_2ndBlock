//alert("connected");
const mes = "../data/purposes.json"; //fetch e iteracion local
console.log(mes);
let arrayMeses = [];
let arrayTema = [];

const iterarMes = () => {
  fetch(mes)
    .then((response) => response.json())
    .then((data) => {
      arrayMeses.push(data);
      console.log(arrayMeses);
      calendario(arrayMeses[0].purposes);
    });
  //iterar meses dinamicamente
  const calendario = (arrayMeses) => {
    for (const [index, month] of arrayMeses.entries()) {
      console.log(index, month);
      document.getElementById("month").innerHTML += `
    <option onclick ="date('${index}')">${month.Month}</option> `;
    }
  };
}; //export const mes = "../data/purposes.json"; //fetch e iteracion local
//console.log(mes);
