const nombres = ["Martin", "Homero", "Cosme", "Steven", "Adam"];

let mostrarResultado = (dato) =>
  dato === "" ? "Nombre no encontrado" : `El nombre ${dato} fue encontrado`;

let mostrarNombreEnMayus = (dato) =>
  dato === "" ? "Nombre no encontrado" : dato.toUpperCase();

let buscarNombre = (nombre, callback) => {
  let nombreEncontrado = "";
  for (let i = 0; i < nombres.length; i++) {
    let nombreXIteracion = nombres[i];
    if (nombreXIteracion === nombre) {
      nombreEncontrado = nombreXIteracion;
    }
  }
  return callback(nombreEncontrado);
};
console.log(buscarNombre("Martin", mostrarResultado));
console.log(buscarNombre("Martin", mostrarNombreEnMayus));

const users = ["Martin", "Homero", "Cosme", "Steven", "Adam"];

// verificar si existe

function buscarNombre(nombre, cb) {
  for (let i = 0; i < users.length; i++) {
    const element = users[i];
    if (element === nombre) {
      return cb(element);
    }
  }
  console.log("Error usuario No  encontrado");
}

function mostrarResultado(res) {
  return "usuario encontrado: " + res;
}

//Array de nombres

//Ejemplo de invocacion con callback como argumento
buscarNombre("Martin", mostrarResultado);
