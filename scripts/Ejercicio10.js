//Funcion para poder brindar los dos numeros a comparar
function numeros() {
  const a = document.querySelector('#n1').value;
  const b = document.querySelector('#n2').value;
  if (b > a) {
    document.querySelector(".result").innerHTML = "Estan en orden creciente";
  } else if (a > b) {
    document.querySelector(".result").innerHTML = "Estan en orden decreciente";
  } else {
    document.querySelector(".result").innerHTML = "";
  }
}




