// Debés crear una función llamada arregloDeObjetos que reciba un número como parámetro y devuelva un arreglo de objetos que tengan una propiedad llamada `valor` que contenga el valor del número y sus anteriores.

// Ejemplo:
// arregloDeObjetos(5) debe retornar [{valor: 1}, {valor: 2}, {valor: 3}, {valor: 4}, {valor: 5}]
// arregloDeObjetos(3) debe retornar [{valor: 1}, {valor: 2}, {valor: 3}]

function arregloDeObjetos(numero) {
    let arrayResultado = [];
    let nuevoObjeto = {};
    for (let i = 1; i <= numero; i++) {
      nuevoObjeto = {
        valor: i,
      };
      arrayResultado.push(nuevoObjeto);
    }
    return arrayResultado;
  }
  let arregloDeObjetos1 = arregloDeObjetos(6);
  // console.log(arregloDeObjetos1);
  
  // Debés crear una función llamada arregloDeObjetosDos que reciba un número y una palabra como parámetro y devuelva un arreglo de objetos que tenga: una propiedad llamada como la palabra pasada por parámetro y el valor del número y sus anteriores.
  
  // Ejemplo:
  // arregloDeObjetosDos(5, “hola”) debe retornar [{hola: 1}, {hola: 2}, {hola: 3}, {hola: 4}, {hola: 5 }]
  // arregloDeObjetosDos(3, “chau”) debe retornar [{chau: 1}, {chau: 2}, {chau: 3}]
  
  function arregloDeObjetos(numero, palabra) {
    let arrayResultado = [];
    for (let i = 1; i <= numero; i++) {
      let nuevoObjeto = {
        [palabra]: i,
      };
      arrayResultado.push(nuevoObjeto);
    }
    return arrayResultado;
  }
  let arregloDeObjetos2 = arregloDeObjetos(7, "Erika");
  console.log(arregloDeObjetos2);



  // Mesa de trabajo
  //la lista de clientes.
let arrayCuentas = [
    {
      nroCuenta: 5486273622,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 27771,
      titularCuenta: "Abigael Natte",
    },
    {
      nroCuenta: 1183971869,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 8675,
      titularCuenta: "Ramon Connell",
    },
    {
      nroCuenta: 9582019689,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 27363,
      titularCuenta: "Jarret Lafuente",
    },
    {
      nroCuenta: 1761924656,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 32415,
      titularCuenta: "Ansel Ardley",
    },
    {
      nroCuenta: 7401971607,
      tipoDeCuenta: "Cuenta Unica",
      saldoEnPesos: 18789,
      titularCuenta: "Jacki Shurmer",
    },
  ];
  // podes continuar tu codigo a partir de aca!
  
  // Nos solicitan también crear un objeto literal llamado “banco”, el cual tendrá una propiedad llamada “clientes”, que estará compuesta de la lista de objetos obtenidos en el punto anterior.
  
  const banco = {
    clientes: arrayCuentas,
    //Al objeto “banco”, crearle un método llamado consultarCliente, el cual recibirá un nombre (titular) por parámetro, deberá buscarlo en la lista de cuentas y retornar el objeto cliente que corresponda con ese nombre ingresado.
    consultarCliente: function (titular) {
      let mensajeError =
        "No se encontraron coincidencias, por favor verifique los datos ingresados";
      let clienteEncontrado;
      for (let i = 0; i < this.clientes.length; i++) {
        let cliente = this.clientes[i];
        if (titular === cliente.titularCuenta) {
          clienteEncontrado = cliente;
        }
      }
      return clienteEncontrado ? clienteEncontrado : mensajeError;
    },
  };
  
  let clienteEncontrado = banco.consultarCliente("Ansel Ardley");
  let clienteEncontrado2 = banco.consultarCliente("leandro");
  console.log(clienteEncontrado);
  console.log(clienteEncontrado2);