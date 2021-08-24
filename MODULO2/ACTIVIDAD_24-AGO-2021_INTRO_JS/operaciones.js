/*
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
*/

//  Actividad de codigo
console.log("\n"+"-----> Actividades de tirar codigo <-------","\n");

console.log("Punto 1");
var edad_minima = 12; // en años
var altura_minima = 1.3; // en metros
var altura = 1.4;
var edad = 13;

if (altura > altura_minima && edad > edad_minima){
    console.log("Puede subir a la montaña Rusa");
}else{console.log("No puede subir a la montaña Rusa");}


// Punto 2
console.log("\n"+"Punto 2")
let no_suficiente_luz = false;
let objeto_mueve_rapido = false;
var usar_flash;

if (no_suficiente_luz || objeto_mueve_rapido){
    usar_flash = true;
}else{usar_flash = false;}
console.log("usar flash: "+usar_flash);


// Punto 3
console.log("\n"+"Punto 3")
let suma_notas_parciales = 6;
let nota_examen_final = 4;

if(suma_notas_parciales > 7 || nota_examen_final > 4){
    console.log("Pasa nivel");
}else{console.log("No pasa nivel");}



// Punto 4
console.log("\n"+"Punto 4")
let realizo_tarea = false;
let toco_piano = true;
let toco_de_memoria = true;

if(realizo_tarea && toco_piano && toco_de_memoria){
    console.log("Puede ver TV");
}else{console.log("No puede ver TV");}