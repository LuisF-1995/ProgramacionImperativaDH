const archivos = require("./lecturaEscritura");
let arrayProfesionales = archivos.leerJson("profesionales");

let nombre = "Hector";
let nombres = ["Rita", "Pedro", "Miguel", "Ana", "Vanesa"];

// let masculinos = nombres.slice(1);
// console.log(masculinos);
let nombresModificado = nombres.slice(0);

nombresModificado.splice(2, 0, nombre);
// console.log(nombres);
// console.log(nombresModificado);

let encontrado = nombres.find((nombre) => nombre === "Ana");
// console.log(encontrado);
let buscarPorId = (id, arrProfs) => {
  let encontrado = arrProfs.find(
    (profesional) => profesional.identificador === id
  );
  return encontrado
    ? encontrado
    : "No se encontro ningun profesional con el id :" + id;
};

arrayProfesionales.sort((a, b) => a.edad - b.edad);
// console.table(arrayProfesionales);

//Para comparar alfabeticamente la funcion es un poco mas larga pero mantiene una logica similar a la de numericamente
var items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "and", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 13 },
  { name: "zeros", value: 37 },
];
items.sort((a, b) => {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  return 0;
});

console.table(items);
