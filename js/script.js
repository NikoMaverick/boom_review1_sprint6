// capturar elementos --> OK
// contador de 5 segundos --> OK
// seleccionar un número --> OK
// compararlo con otro número aleatorio
// a los 5 segundos que aparezca el núemro aleatroio con el número elegido
// botón que reinicie

let numberSelect = 0

const userInput = document.getElementById("userInput"),
countdown = document.getElementById("countdown"),
result = document.getElementById("result"),
restart = document.getElementById("restart")

userInput.addEventListener("change", () => {
  numberSelect = parseInt(userInput.value)
})

function iniciarContador () {
  let segundos = 5;
  setInterval(() => {
    if(segundos >= 0) {
      countdown.innerText = segundos
    }
    segundos--
  }, 1000)
}

const getPromise = () => {
  const response = new Promise(resolve => {
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 3) + 1,
      win = `
        <h2>¡Has salvado el mundo!</h2>
        <p>Tu número ${numberSelect} es igual al número ${randomNumber}</p>
      `,
      lose = `
        <h2>¡Ha explotado la bomba!</h2>
        <p>Tu número ${numberSelect} no es igual al número ${randomNumber}</p>
      `
      numberSelect === randomNumber ? resolve(win) : resolve(lose)
    }, 6000)
  })
  .then(data => result.innerHTML = data)
}

restart.addEventListener("click", () => {
  location.reload()
})

getPromise()
iniciarContador()