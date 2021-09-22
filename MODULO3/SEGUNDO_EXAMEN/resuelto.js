const v = "\x1b[32m%s\x1b[0m";
const o = "*".repeat(80) + "\n";
const oo = "*".repeat(25);
/*  =================================================================

Te proveemos la siguiente plantilla que tiene tres partes:
 - Array de objetos que está colapsado aquí debajo.
 - Desarrollo de las consignas, donde escribirás el código que responda a los enunciados
 - Ejecución de las consignas, donde ejecutarás los métodos correspondientes mostrando por consola sus resultados 
================================================================= */
const nombre = "tu nombre aquí";
const tema = "el tema que te tocó";

const departamentos = [
  {
    id: 1,
    propietarios: "Dueño: Luis Perez",
    ambientes: 2,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 2,
    precioAlquiler: 42700,
  },
  {
    id: 2,
    propietarios: "Dueñas: Martinez Hnas",
    ambientes: 1,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 2,
    precioAlquiler: 29000,
  },
  {
    id: 3,
    propietarios: "Dueña: Laura García",
    ambientes: 2,
    disponible: false,
    aceptaMascotas: false,
    cantidadPersonas: 3,
    precioAlquiler: 53000,
  },
  {
    id: 4,
    propietarios: "Dueña: Julieta Tols",
    ambientes: 1,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 1,
    precioAlquiler: 17900,
  },
  {
    id: 5,
    propietarios: "Dueño: Pablo Groming",
    ambientes: 1,
    disponible: false,
    aceptaMascotas: false,
    cantidadPersonas: 1,
    precioAlquiler: 24100,
  },
  {
    id: 6,
    propietarios: "Dueñas: Martinez Hnas",
    ambientes: 2,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 3,
    precioAlquiler: 46700,
  },
  {
    id: 7,
    propietarios: "Dueño: Alberto Direck",
    ambientes: 2,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 2,
    precioAlquiler: 37000,
  },
  {
    id: 8,
    propietarios: "Dueña: Maria Gonzalez",
    ambientes: 4,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 5,
    precioAlquiler: 84000,
  },
  {
    id: 9,
    propietarios: "Dueña: Martina García",
    ambientes: 3,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 5,
    precioAlquiler: 74000,
  },
  {
    id: 10,
    propietarios: "Dueña: Cristina Foldati",
    ambientes: 3,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 3,
    precioAlquiler: 55800,
  },
  {
    id: 11,
    propietarios: "Dueño: Ramiro Orwel",
    ambientes: 3,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 4,
    precioAlquiler: 68000,
  },
  {
    id: 12,
    propietarios: "Dueño: Juan Goldstein",
    ambientes: 3,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 4,
    precioAlquiler: 63000,
  },
  {
    id: 13,
    propietarios: "Dueño: Juan Pablo Martinez",
    ambientes: 2,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 2,
    precioAlquiler: 43200,
  },
  {
    id: 14,
    propietarios: "Dueños: Ramirez y asociados",
    ambientes: 2,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 2,
    precioAlquiler: 40000,
  },
  {
    id: 15,
    propietarios: "Dueños: Martín Gutierrez y José Torres",
    ambientes: 1,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 1,
    precioAlquiler: 21500,
  },
  {
    id: 16,
    propietarios: "Dueñas: Olga Fernandez y Victoria Paz",
    ambientes: 1,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 1,
    precioAlquiler: 28000,
  },
  {
    id: 17,
    propietarios: "Dueños: Ramirez y asociados",
    ambientes: 1,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 1,
    precioAlquiler: 23000,
  },
];

/*******************************/
/* Desarrollo de las consignas */
/*******************************/

const inmobiliaria = {
  // A
  departamentos,
  // B
  listarDepartamentos: function (arrDeptos) {
    for (let i = 0; i < arrDeptos.length; i++) {
      let disponible = arrDeptos[i].disponible ? "disponible" : "alquilado";
      let aceptaMascotas = arrDeptos[i].aceptaMascotas
        ? "acepta mascotas"
        : "no acepta mascotas";
      console.log(
        `id: ${arrDeptos[i].id}, precio: $ ${arrDeptos[i].precioAlquiler}, está ${disponible}, ` +
          `${arrDeptos[i].ambientes} ambiente${
            arrDeptos[i].ambientes > 1 ? "s" : ""
          }, máximo ${arrDeptos[i].cantidadPersonas}` +
          `personas, ${aceptaMascotas}, propietarios: ${arrDeptos[i].propietarios}`
      );
    }
  },
  // C
  departamentosDisponibles: function () {
    let disponibles = [];
    for (let i = 0; i < this.departamentos.length; i++) {
      if (this.departamentos[i].disponible) {
        disponibles.push(this.departamentos[i]);
      }
    }
    return disponibles;
  },
  // D
  buscarPorId: function (id) {
    let depto;
    let mensajeError =
      "No se encontro ningun departamento con el identificador: " + id;
    for (let i = 0; i < this.departamentos.length; i++) {
      if (this.departamentos[i].id === id) {
        depto = this.departamentos[i];
      }
    }
    return depto ? depto : mensajeError;
  },
  // E
  buscarPorPrecio: function (alquiler) {
    let deptosResultado = [];
    let mensajeError =
      "No se encontraron departamentos con alquileres menores a: $" + alquiler;
    let disponibles = this.departamentosDisponibles();
    for (let i = 0; i < disponibles.length; i++) {
      if (disponibles[i].precioAlquiler <= alquiler) {
        deptosResultado.push(disponibles[i]);
      }
    }
    if (deptosResultado.length > 0) {
      return deptosResultado;
    } else {
      return mensajeError;
    }
  },
  // F
  precioConImpuesto: function (porcentaje) {
    let aux = porcentaje / 100 + 1;
    for (let i = 0; i < this.departamentos.length; i++) {
      this.departamentos[i].precioAlquiler *= aux;
    }
    return this.departamentos;
  },
  // G
  simplificarPropietarios: function () {
    for (let i = 0; i < this.departamentos.length; i++) {
      let losPropietarios = this.departamentos[i].propietarios;
      let desde = losPropietarios.indexOf(":");
      let soloPropietarios = losPropietarios.slice(desde);
      this.departamentos[i].propietarios = "Prop." + soloPropietarios;
    }
    return this.departamentos;
  },

  // mesas de trabajo
  // A
  alquilarDepartamento: function (id) {
    let mensaje;
    let mensajeError =
      "No se encontro ningun departamento con el identificador: " + id;
    for (let i = 0; i < this.departamentos.length; i++) {
      if (this.departamentos[i].id === id) {
        this.departamentos[i].disponible = false;
        mensaje = "Departamento alquilado correctamente";
      }
    }
    if (mensaje) {
      return mensaje;
    } else {
      return mensajeError;
    }
  },
  // B
  filtrarPetFriendly: function () {
    let petFriendlyDptos = [];
    for (let i = 0; i < this.departamentos.length; i++) {
      if (this.departamentos[i].aceptaMascotas) {
        petFriendlyDptos.push(this.departamentos[i]);
      }
    }
    return petFriendlyDptos;
  },
  // C
  rebajasPorNoAlquiler: function () {
    let disponibles = this.departamentosDisponibles();
    const descuento = 0.9;
    let rebajados = [];
    for (let i = 0; i < disponibles.length; i++) {
      rebajados.push((disponibles[i].precioAlquiler *= descuento));
    }
    return rebajados;
  },
  // D
  buscarPorPropietarios: function (propietarios) {
    let filtrados = [];
    for (let i = 0; i < this.departamentos.length; i++) {
      if (this.departamentos[i].propietarios.indexOf(propietarios) != -1) {
        filtrados.push(this.departamentos[i]);
      }
    }
    return filtrados;
  },
};

/******************************/
/* Ejecución de las consignas */
/******************************/
console.table([{ alumno: nombre, tema: tema }]);

console.log(v, "\n" + oo + "   B. listarDepartamentos");
inmobiliaria.listarDepartamentos(inmobiliaria.departamentos);
console.log(o);

console.log(v, oo + "   C. departamentosDisponibles");
console.log(inmobiliaria.departamentosDisponibles());
console.log(o);

console.log(v, oo + " D. buscarPorId");
console.log(inmobiliaria.buscarPorId(3));
console.log(o);

console.log(v, oo + "  E. buscarPorPrecio");
console.log(inmobiliaria.buscarPorPrecio(1000));
console.log(o);

console.log(v, oo + " F. precioConImpuesto");
inmobiliaria.precioConImpuesto(30);
console.log(o);

console.log(v, oo + " G. simplificarPropietarios");
inmobiliaria.simplificarPropietarios();
console.log(o);

// MESAS DE TRABAJO

console.log(v, oo + " A. alquilarDepartamento");
console.log(inmobiliaria.alquilarDepartamento(4));
console.log(o);

console.log(v, oo + " B. filtrarPetFriendly");
console.log(inmobiliaria.filtrarPetFriendly());
console.log(o);

console.log(v, oo + " C. rebajasPorNoAlquiler");
console.log(inmobiliaria.rebajasPorNoAlquiler());
console.log(o);

console.log(v, oo + " D. buscarPorPropietarios");
console.log(inmobiliaria.buscarPorPropietarios("Luis Perez"));
console.log(o);
