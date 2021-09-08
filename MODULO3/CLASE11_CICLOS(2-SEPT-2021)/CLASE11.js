let peliculas = ["star wars", "totoro",  "rocky", "pulp fiction",  "la vida es bella"]

function convertirAMayusculas(array){
    let mayusculas = [];
    for (let i = 0; i < array.length ; i++) {
        mayusculas.push(array[i].toUpperCase())
    }
    return mayusculas;
}

console.log(convertirAMayusculas(peliculas))

// Punto 2
let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];
let peliculasAnimadas = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];
let peliculasMezcladas = [];
function pasajeDeElementos(array1, array2) {
    let ultimoElemento = array2.pop();
    peliculasMezcladas = array1.concat(array2);
    return peliculasMezcladas;
}

console.log(pasajeDeElementos(peliculas, peliculasAnimadas))



// Punto 4

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5]; 

function compararCalificaciones(asia, europa) {
  let comparacionesAsiaEuropa = []
  for (let i=0; i < asia.length; i++){
    comparacionesAsiaEuropa[i] = asia[i] === europa[i];
  }
  return comparacionesAsiaEuropa
}

console.log(compararCalificaciones(asiaScores,euroScores))
