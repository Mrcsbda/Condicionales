//Funcion para poder brindar los dos numeros a comparar
function numeros() {
  const a = document.querySelector('#n1').value;
  const b = document.querySelector('#n2').value;
  if (b > a) {
    document.querySelector(".resultado").innerHTML = "Estan en orden creciente";
  } else if (a > b) {
    document.querySelector(".resultado").innerHTML = "Estan en orden decreciente";
  } else {
    document.querySelector(".resultado").innerHTML = "";
  }
}




