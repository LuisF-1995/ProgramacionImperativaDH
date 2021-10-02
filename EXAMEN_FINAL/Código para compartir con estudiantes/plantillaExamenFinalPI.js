const v = "\x1b[32m%s\x1b[0m"; // NO TOCAR
const o = "*".repeat(80) + "\n"; // NO TOCAR
const oo = "*".repeat(25); // NO TOCAR
// Te proveemos la siguiente plantilla que tiene dos partes:
// - Desarrollo de las consignas, donde escribirás el código que responda a los enunciados
// - Ejecución de las consignas, donde ejecutarás los métodos correspondientes mostrando por consola sus resultados
const nombre = "Luis Fernando Rodriguez Ortiz";
const tema = "TEMA 2";

/*******************************/
/* Desarrollo de las consignas */
/*******************************/

const RWJSON = require('./jsonHelper')

// A ==>  Crear un objeto literal llamdo gestionDePeliculas
const gestionDePeliculas = {
    // B ==> Agregar una propiedad llamada peliculas en la que asignarás las películas obtenidas 
    //       a partir del método leer del objeto requerido como módulo
    peliculas: RWJSON.leerJson('peliculas'),

    //C Agregar un método listarPelículas que reciba como parámetro un array de películas y 
    //  los imprima por consola:
    // {titulo}, de {director}. Duración: {duración} minutos, {genero}, ({calificación} / 10 en IMDB)
    listarPelículas: function(arrayPelis){
        arrayPelis.forEach( pelicula =>
            console.log(`${pelicula.titulo}, de ${pelicula.director}. Duración: ${pelicula.duracion} minutos, ${pelicula.genero}, (${pelicula.calificacionIMDB} / 10 en IMDB)`))
    },

    //D Agregar un método buscarPorId que permita buscar una película en función de su identificador
    buscarPorId: function(idPeli){
        return this.peliculas.find(pelicula => pelicula.id === idPeli)
    },

    // E Agregar un método peliculasPorGenero, que retorne todas las películas de determinado género
    peliculasPorGenero: function(genero){
        return this.peliculas.filter(peli => peli.genero === genero)
    },

    //F Agregar un método filtrarPorCalificacion que permita filtrar las películas que 
    //  tengan una calificación que esté entre el mínimo y máximo enviado
    filtrarPorCalificacion: function(calificacionMin, calificacionMax){
        return this.peliculas.filter(pelicula => {return pelicula.calificacionIMDB>=calificacionMin && pelicula.calificacionIMDB <= calificacionMax})
    },

    //G Agregar un método ordenarPorDuracion que permita ordenar las películas recibidas de 
    //  mayor a menor según su duración
    ordenarPorDuracion: function(){
        return this.peliculas.sort((a, b) => b.duracion - a.duracion)
    },

    //H Agregar un método duracionPromedio que permita calcular la duración promedio en minutos de las películas
    duracionPromedio: function(){
        let duracionTotal = this.peliculas.reduce((acum, peli) => acum + peli.duracion, 0);
        let promedioDuracionPelis = duracionTotal / this.peliculas.length;
        return `El promedio de duración de las películas es de: ${promedioDuracionPelis} minutos`
    },

    /*I Agregar un método modificarGeneroPorId que permita cambiar el género de una película 
    en función de su id y guardar los cambios en el archivo JSON*/
    modificarGeneroPorId: function(idPeli, nuevoGenero){
        let peliEncontrada = this.buscarPorId(idPeli);
        if (peliEncontrada){
            peliEncontrada.genero = nuevoGenero;
            RWJSON.escribirJson('peliculas', this.peliculas)
        }else{console.log(undefined)}
    }
}

/******************************/
/* Ejecución de las consignas */
/******************************/
console.table([{ alumno: nombre, tema: tema }]); // NO MODIFICAR NADA DE ESTA LINEA

console.log(v, "\n" + oo + " .C. Listar");
gestionDePeliculas.listarPelículas(gestionDePeliculas.peliculas)
console.log(o);

console.log(v, oo + " .D. Buscar");
console.log(gestionDePeliculas.buscarPorId(6))
console.log(o);

console.log(v, oo + " .E. Filtrar 1");
gestionDePeliculas.listarPelículas(gestionDePeliculas.peliculasPorGenero("Aventura"))
console.log(o);

console.log(v, oo + " .F. Filtrar 2");
gestionDePeliculas.listarPelículas(gestionDePeliculas.filtrarPorCalificacion(8,10))
console.log(o);

console.log(v, oo + " .G. Ordenar");
gestionDePeliculas.listarPelículas(gestionDePeliculas.ordenarPorDuracion())
console.log(o);

console.log(v, oo + " .H. Duracion");
console.log(gestionDePeliculas.duracionPromedio());
console.log(o);

console.log(v, oo + " .I. Modificar Propiedad");
console.log(gestionDePeliculas.buscarPorId(6))
gestionDePeliculas.modificarGeneroPorId(6, "Horror")
console.log(gestionDePeliculas.buscarPorId(6));
console.log(o);
