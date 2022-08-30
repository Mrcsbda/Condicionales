let acumulador = 0;
const groupsContainer = document.querySelector('.groups')


function addStudents () {
  acumulador = acumulador + 1;
  let student = document.createElement('section') 
  student.className = 'newStudent'
  student.innerHTML = `
  <label for="student"> Promedio Alumno ${acumulador}</label>
  <input id="student" type="number" required> 
  <button onclick="removeStudent(event)"> (-) Eliminar </button>
  `
  groupsContainer.appendChild(student);
}

function removeStudent (event) {
acumulador = acumulador - 1;
return event.target.parentElement.remove();
}

function calcular () {
const averages = document.querySelectorAll('#student');
let values = 0;

for (const iterator of averages) {
  values += +iterator.value;
}
result = document.querySelector('.result')

return result.innerHTML = values/averages.length;
}