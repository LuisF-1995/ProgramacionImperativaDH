const jsonHelper = require("./lecturaEscritura");

const inmobiliaria = {
  departamentos: jsonHelper.leerJson("departamentos"),
  listarDepartamentos: function (arrDeptos) {
    arrDeptos.forEach((depto) => {
      let disponibilidad =
        depto.disponible === true ? "disponible" : "alquilado";
      console.log(
        `id: ${depto.id}, precio $${depto.precioAlquiler}, está ${disponibilidad}, ${depto.ambientes} ambientes`
      );
    });
  },
  buscarPorId: function (id) {
    let encontrado = this.departamentos.find((depto) => depto.id === id);
    return encontrado;
  },
  departamentosNoDisponibles: function () {
    return this.departamentos.filter((depto) => depto.disponible === false);
  },
  calcularRecaudacion: function () {
    let alquilados = this.departamentosNoDisponibles();
    let valor = alquilados.reduce(
      (acum, depto) => acum + depto.precioAlquiler,
      0
    );
    return `La recaudacion total es de: $${valor}`;
  },
};

// console.log(inmobiliaria.departamentos);
// inmobiliaria.listarDepartamentos(inmobiliaria.departamentos);
// console.log(inmobiliaria.buscarPorId(10));
// inmobiliaria.listarDepartamentos(inmobiliaria.departamentosNoDisponibles());
console.log(inmobiliaria.calcularRecaudacion());
