//Capturar HTML. OK
// Generar un numero aleatorio entre 1 y 3. OK
// Cuenta atras de 5 segundos. OK
// Comparar el el numero aleatorio con el del usuario.

const countdown = document.querySelector('countdown');
let result = document.querySelector('result');
const button = document.querySelector('restart');
let rango;
const sms1 = "";
const sms2 = "";

/*
const randomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);


const numberOne = new Promise((resolve) => {
    setTimeout(() => {
        rango = randomNumber(1, 3);
        resolve(rango);
        }, 5000);
        });
        */
       
const number1 = Math.floor(Math.random() * 3 - 1 + 1) + 1;
let userInput = 0;

function bombaGame() {
    userInput = parseInt(document.querySelector('userInput').value);//Combertimos el valor del elemento en texto.
    if (userInput !== number1){
        sms2 = `${userInput}La bomba ha estallado`
    }
    if(userInput == number1){
        sms1 = `${userInput}¡Has salvado el mundo!`
    }
}



/*

//Posible cuenta regresiva 

window.onload = updateClock;
let totalTime = 5;
function updateClock() {
document.getElementById('countdown').innerHTML = totalTime;
if(totalTime==1){
alert('La bomba ha estallado');
}
else{
alert('¡Has salvado el mundo!');
setTimeout("updateClock()",5000);
}
}*/