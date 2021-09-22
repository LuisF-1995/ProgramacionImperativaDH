const jsonHelper = require('./ReadWriteJSON');

const concesionaria = {
  vehiculos: jsonHelper.leerArchivo('AUTOS'),
  incrementarPrecio: function (porcentaje) {
    let aux = porcentaje / 100 + 1;
    for (let i = 0; i < this.vehiculos.length; i++) {
      const vehiculo = this.vehiculos[i];
      vehiculo.precio *= aux;
    }
    jsonHelper.escribirArchivo('AUTOS', this.vehiculos);
    return `Los vehiculos aumentaron un %${porcentaje}`;
  },
  agregarAuto: function (marca, modelo, anio, precio, patente) {
    const vendido = false;
    let newVehiculo = {
      marca: marca,
      modelo: modelo,
      anio: anio,
      precio: precio,
      patente: patente,
      vendido: vendido,
    };
    this.vehiculos.push(newVehiculo);
    jsonHelper.escribirArchivo('AUTOS', this.vehiculos);
  },
  
};

console.log(concesionaria.vehiculos);
console.log(concesionaria.incrementarPrecio(20));
concesionaria.agregarAuto('Ford', 'Mustang', 2021, 10000, 'ASD123');
