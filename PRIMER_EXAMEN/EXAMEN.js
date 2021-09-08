/*function esMayuscula(palabra){
    if (palabra === palabra.toUpperCase()) {
        return "la palabra ingresada: "+palabra+" esta en mayusculas."
    }else{
        return "la palabra ingresada: "+palabra+" no esta en mayusculas."
    }
}
console.log(esMayuscula("EMILIANO"));*/

/*
let contrasena = "digital";
if (contrasena === "Digital"){
    console.log("contraseña correcta, puede pasar");
}else{console.log("lo siento, la contraseña es incorrecta")}
*/

function dividir(num_1, num_2){
    if(num_2 == 0){
        return "No se puede dividir por 0";
    }else{return num_1/num_2;}
}

console.log(dividir(8,0))