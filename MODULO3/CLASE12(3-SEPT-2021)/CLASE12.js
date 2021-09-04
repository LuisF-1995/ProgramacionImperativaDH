const alicia = [70, 25 , 15];
const bob = [70, 25, 20];
let contadorAlicia = 0; 
let contadorBob = 0;

function encontrarGanador(a, b) {
    for (let i = 0; i<=2; i++){
        if (a[i] > b[i]){
            contadorAlicia ++ 
        } else if (a[i] < b[i]) {
            contadorBob++
        }
    }
    if (contadorAlicia > contadorBob){
        return "Ganadora Alicia"
    } else if (contadorAlicia === contadorBob) {
        return "Hay empate!"
    }else{
        return "Ganador Bob"
    }
}
console.log(encontrarGanador(alicia,bob));