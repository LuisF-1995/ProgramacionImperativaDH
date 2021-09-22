const v = "\x1b[32m%s\x1b[0m";
const o = "*".repeat(80) + "\n";
const oo = "*".repeat(25);
// Te proveemos la siguiente plantilla que tiene tres partes:
// - Array de objetos que está colapsado aquí debajo.
// - Desarrollo de las consignas, donde escribirás el código que responda a los enunciados
// - Ejecución de las consignas, donde ejecutarás los métodos correspondientes mostrando por consola sus resultados
const nombre = "Luis Fernando Rodriguez Ortiz";
const tema = "TEMA 4";

const arrayProfesionales = [
  {
    id: 0,
    estaHabilitado: false,
    nombre: "Huber Wilkins",
    email: "huberwilkins#speedbolt.com",
    especialidad: "Neumonologia",
    cantidadConsultas: 3,
  },
  {
    id: 1,
    estaHabilitado: true,
    nombre: "Goldie Haley",
    email: "goldiehaley#speedbolt.com",
    especialidad: "Cardiologia",
    cantidadConsultas: 3,
  },
  {
    id: 2,
    estaHabilitado: false,
    nombre: "Pena Landry",
    email: "penalandry@speedbolt.com",
    especialidad: "Dermatologia",
    cantidadConsultas: 9,
  },
  {
    id: 3,
    estaHabilitado: false,
    nombre: "Leanne Burch",
    email: "leanneburch#speedbolt.com",
    especialidad: "Neumonologia",
    cantidadConsultas: 13,
  },
  {
    id: 4,
    estaHabilitado: false,
    nombre: "Haynes Fuentes",
    email: "haynesfuentes@speedbolt.com",
    especialidad: "Cardiologia",
    cantidadConsultas: 75,
  },
  {
    id: 5,
    estaHabilitado: true,
    nombre: "Tamika Fuentes",
    email: "tamikanewman@speedbolt.com",
    especialidad: "Cardiologia",
    cantidadConsultas: 32,
  },
  {
    id: 6,
    estaHabilitado: true,
    nombre: "Russo Baldwin",
    email: "russobaldwin@speedbolt.com",
    especialidad: "Dermatologia",
    cantidadConsultas: 67,
  },
  {
    id: 7,
    estaHabilitado: true,
    nombre: "Dodson Shaffer",
    email: "dodsonshaffer#speedbolt.com",
    especialidad: "Cardiologia",
    cantidadConsultas: 2,
  },
  {
    id: 8,
    estaHabilitado: true,
    nombre: "Guerra Bright",
    email: "guerrabright#speedbolt.com",
    especialidad: "Neumonologia",
    cantidadConsultas: 6,
  },
  {
    id: 9,
    estaHabilitado: true,
    nombre: "Dina Navarro",
    email: "dinanavarro@speedbolt.com",
    especialidad: "Cardiologia",
    cantidadConsultas: 8,
  },
  {
    id: 10,
    estaHabilitado: false,
    nombre: "Stafford Watts",
    email: "staffordwatts@speedbolt.com",
    especialidad: "Cardiologia",
    cantidadConsultas: 0,
  },
  {
    id: 11,
    estaHabilitado: false,
    nombre: "Joni Avery",
    email: "joniavery@speedbolt.com",
    especialidad: "Neumonologia",
    cantidadConsultas: 6,
  },
  {
    id: 12,
    estaHabilitado: true,
    nombre: "Mayra Tran",
    email: "mayratran@speedbolt.com",
    especialidad: "Oftamologia",
    cantidadConsultas: 2,
  },
  {
    id: 13,
    estaHabilitado: false,
    nombre: "Ward Dale",
    email: "warddale@speedbolt.com",
    especialidad: "Cardiologia",
    cantidadConsultas: 23,
  },
];

/*******************************/
/* Desarrollo de las consignas */
/*******************************/

// A.
let appProfesionales = {
  profesionales: arrayProfesionales,

  // B
  /* Agregar un método listarProfesionales que permita confeccionar un listado que facilite al usuario,
  leer los datos de los profesionales que estén dentro del array que se recibe por parámetro, 
  de manera que imprima por consola los siguientes datos con este formato:
  id 3 inactivo, Neumonología, Leanne Burch, consultas: 1, email: leanneburch@speedbolt.com
  id 8 ok, Neumonología, Guerra Bright, consultas: 8, email: guerrabright@speedbolt.com
*/
  listarProfesionales : function(arrayProfesionales){
    for (let i = 0; i < arrayProfesionales.length; i++) {
      let estado = arrayProfesionales[i].estaHabilitado ? "ok" : "inactivo";
      
      console.log(
        `id ${arrayProfesionales[i].id} ${estado}, ${arrayProfesionales[i].especialidad}, ${arrayProfesionales[i].nombre}, consultas: ${arrayProfesionales[i].cantidadConsultas}, email: ${arrayProfesionales[i].email}`
      );
    }
  },

  // C
  /*Agregar un método filtrarHabilitadosPorEspecialidad que permita filtrar profesionales que 
  estén habilitados, y además, por determinada especialidad recibida por parámetro.
    Este método deberá retornar un array de profesionales habilitados por especialidad
    Sólo recibe por parámetro la especialidad.
  */
  filtrarHabilitadosPorEspecialidad: function(especialidad){
    let habilitados = [];
    let espHabilitados = [];

    for (let i = 0; i < this.profesionales.length; i++) {
      if (this.profesionales[i].estaHabilitado) {
        habilitados.push(this.profesionales[i]);
      }
    }
    for (let i = 0; i < habilitados.length; i++) {
      if (habilitados[i].especialidad === especialidad) {
        espHabilitados.push(habilitados[i]);
      }
    }
    return espHabilitados;
  },

  // D
  /*Agregar un método buscarPorID que permita buscar dentro de la propiedad de nuestro objeto 
  profesionales un profesional por la propiedad id, la misma deberá ser igual a un id que se envía 
  como argumento al momento de invocarlo. 
    Este método deberá retornar un profesional.
 */
  buscarPorID: function(idProfesional){
    for (let i = 0; i < this.profesionales.length; i++) {
      if (idProfesional === this.profesionales[i].id) {
        return this.profesionales[i];
      }
    }
  },

  // E
  /*Agregar un método realizarConsulta que permita incrementar en 1 la cantidad de consultas
  de un profesional, el mismo deberá realizar los siguiente pasos.
    Recibe un parámetro, el id del profesional.
    Reutiliza el método buscarPorID para obtener el profesional.
    Una vez encontrado el profesional deberá cambiar el valor de la propiedad cantidadConsultas,
    incrementando su valor en 1
    Al finalizar deberá retornar al profesional en cuestión
 */
  realizarConsulta: function(idProfesional){
    profesionalEncontrado = this.buscarPorID(idProfesional);
    profesionalEncontrado.cantidadConsultas += 1;
    return profesionalEncontrado;
  },

  // F
  /*Agregar un método corregirEmails que corrija los emails de todos los profesionales dado que 
  algunos por error tienen en lugar del “@” el símbólo “#”   */

  corregirEmails: function(){
    
    for (let i = 0; i < this.profesionales.length; i++) {
      if (this.profesionales[i].email.indexOf('@') === -1){
        this.profesionales[i].email = this.profesionales[i].email.replace("#", "@");
      }
    }
    return this.profesionales;
  }
}

/******************************/
/* Ejecución de las consignas */
/******************************/
console.table([{ alumno: nombre, tema: tema }]);

console.log(v, "\n" + oo + "   B. listarProfesional");
// Ejecución aquí
appProfesionales.listarProfesionales(appProfesionales.profesionales);
console.log(o);

console.log(v, oo + "   C. filtrarHabilitadosPorEspecialidad('Cardiologia')");
// Ejecución aquí
appProfesionales.listarProfesionales(appProfesionales.filtrarHabilitadosPorEspecialidad('Cardiologia'));
console.log(o);

console.log(v, oo + " D. buscarPorId(1)");
// Ejecución aquí
console.log(appProfesionales.buscarPorID(10))
console.log(o);

console.log(v, oo + "  E. realizarConsulta()");
// Ejecución aquí
console.log(appProfesionales.realizarConsulta(10))
console.log(o);

console.log(v, oo + " F. corregirEmails");
// Ejecución aquí
appProfesionales.listarProfesionales(appProfesionales.corregirEmails());
console.log(o);
