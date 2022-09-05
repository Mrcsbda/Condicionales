let resultadoFibonacci = document.querySelector(".fibonacci");
let resultadoPrimo = document.querySelector(".primo");

function evaluarFibonacci() {
  let numero = document.querySelector("#numero").value;
  let varAux = [0, 1];
  let verificar = false;

  console.log(numero);

  for (let i = 2; i < +numero + 2; i++) {
    varAux[i] = varAux[i - 1] + varAux[i - 2];
  }

  console.log(varAux);

  for (let i = 0; i <= varAux.length; i++) {
    if (varAux[i] === +numero) {
      verificar = true;
    }
  }

  if (verificar === true) {
    resultadoFibonacci.innerHTML = "Es un número fibonacci";
  } else {
    resultadoFibonacci.innerHTML = "No es un número fibonacci";
  }
}

function evaluarPrimo() {
  let numero = document.querySelector("#numero").value;
  let verificar = true; 

  for (let i =  2; i < numero; i++) {
    if (numero % i === 0) {
    verificar = false;
    }
  }
  
  if (verificar === true) {
    resultadoPrimo.innerHTML = "Es un número primo";
  } else {
    resultadoPrimo.innerHTML = "No es un número primo";
  }
}
