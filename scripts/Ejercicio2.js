
const numero = parseInt(prompt("Ingrese un número positivo: "));
let esPrimo = true;

if (numero === 1) {
  console.log(
    "El 1 no es un número primo pero si es un Número de Fibonacci. <br>"
  );
} else if (numero > 1) {
  for (let i = 2; i < numero; i++) {
    if (numero % i == 0) {
      esPrimo = false;
      break;
    }
  }

  if (esPrimo) {
    console.log(`${numero} es un número primo. <br>`);
  } else {
    console.log(`${numero} no es un número primo. <br>`);
  }

  esFibonacci(numero)
    ? console.log(numero + " es un Número de Fibonacci <br/>")
    : console.log(numero + " no es un Número de Fibonacci <br/>");
} else {
  console.log(
    "El número ingresado no es un número primo ni tampoco un Número de Fibonacci. <br>"
  );
}

function esCuadradoPerfecto(x) {
  let s = parseInt(Math.sqrt(x));
  return s * s == x;
}

// Devuelve true si n es un número de Fibonacci, sino es false
function esFibonacci(n) {
  return esCuadradoPerfecto(5 * n * n + 4) || esCuadradoPerfecto(5 * n * n - 4);
}