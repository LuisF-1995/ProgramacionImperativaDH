//Punto 1
console.log("\n"+"Punto1"+"\n");
console.log(!1); // Devuelve falso
console.log(!!1); // devuelve true
console.log(!0); // devuelve true
console.log(!!""); // Devuelve falso

let x = 5;
let y = 9;
console.log("Punto a.", x < 10 && x!==5);
console.log("Punto b.",x>9 || x===5);
console.log("Punto c.",!(x===y));


//Punto 2

console.log("\n"+"Punto2"+"\n");
let x=10
let y ="a"
console.log(y==="b" || x >= 10); //devuelve true


let x=3
let y=8
console.log(!(x == "3" || x === y) && !(y !== 8 && x <= y)); //devuelve false


let str = ""
let msj = "jaja!"
let esGracioso = "false"
console.log(!((str || msj) && esGracioso)); //devuelve false
