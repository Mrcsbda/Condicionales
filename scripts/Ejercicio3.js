
function evaluar (event) {
//Tiempo que tuvo el deportista cada día en minutos
const timeTests = document.querySelectorAll('.time');
let valuesTest = 0;
let times = [];

for (const iterator of timeTests) {
  times.push(+iterator.value)
  valuesTest += +iterator.value;
}

let averageTests = valuesTest/timeTests.length;
let result = document.querySelector('.result')
//Condiciones que debe cumplir el atleta para ser apto
if(
  times.findIndex((tiempo)=>tiempo<16) !== -1 ||
  times.findIndex((tiempo)=>tiempo>16) !== -1 ||
  averageTests <= 15
){
  result.innerHTML= 'Es apto para la prueba de 5km'
} else {
  result.innerHTML= 'No es apto para la prueba de 5km'
}

event.preventDefault()
}