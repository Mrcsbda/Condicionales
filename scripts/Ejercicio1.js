
function calcularPrimos () {
  let rango = document.querySelector('.primos').value;
  let primos =  document.createElement('div');
  let main = document.querySelector('.main');
  
  const numeros = [];
  const numerosAux = [];

  //Ciclo para rellenar arreglo con los numeros del rango proporcionado
  for (let i = 1; i < rango; i = i + 1) {
    numeros[i] = i;
  }
  
  //Ciclo para determinar cuales numeros son primos del rango proporcionado
  for (let i = 1; i < rango; i = i + 1) {
    contador = 0;
    let primo = 1;
    while (primo <= i) {
      if (i % primo === 0) {
        contador += 1;
      }
      primo += 1;
    }
  
    if (contador === 2) {
      numerosAux.push(i)
    }
  }
  primos.innerHTML = `
      <p>Los numeros primos hasta el ${rango} son ${numerosAux}</p>
      `;
      main.appendChild(primos)
}

