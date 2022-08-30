function sumar() {
  let resultado = 0;

//Ciclo para calcular la suma
for ( let i= 100; i > 0; i = i-2) {
  resultado += i;
}

return document.querySelector(".resultado").innerHTML = resultado;
}