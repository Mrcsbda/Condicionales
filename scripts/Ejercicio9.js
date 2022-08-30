const northContainer = document.querySelector('.zonaNorte');
const centerContainer = document.querySelector('.zonaCentro');
const southContainer = document.querySelector('.zonaSur');
const resultNorte = document.querySelector('.resultNorth');
const resultCenter = document.querySelector('.resultCenter');
const resultSouth = document.querySelector('.resultSouth');
const totalVotantes = document.querySelector('.totalVotantes');

function addNorth () {
  let north = document.createElement("section");
  north.className = "newNorth";
  north.innerHTML = `
  <label for="votanteNorte"> Votante Norte</label>
  <input id="votanteNorte" type="text" required> 
  <button onclick="removeVotante(event)"> (-) Eliminar </button>
  `;
  northContainer.appendChild(north);
}

function addCenter () {
  let center = document.createElement("section");
  center.className = "newcenter";
  center.innerHTML = `
  <label for="votanteCentro"> Votante Centro</label>
  <input id="votanteCentro" type="text" required> 
  <button onclick="removeVotante(event)"> (-) Eliminar </button>
  `;
  centerContainer.appendChild(center);
}

function addSouth () {
  let south = document.createElement("section");
  south.className = "newsouth";
  south.innerHTML = `
  <label for="votanteSur"> Votante Sur</label>
  <input id="votanteSur" type="text" required> 
  <button onclick="removeVotante(event)"> (-) Eliminar </button>
  `;
  southContainer.appendChild(south);
}

function removeVotante(event) {
return event.target.parentElement.remove();
}

function calculate() {
const votantesNorte = document.querySelectorAll('#votanteNorte')
const votantesCentro = document.querySelectorAll('#votanteCentro')
const votantesSur = document.querySelectorAll('#votanteSur')
let cantNorte = 0;
let cantCentro = 0;
let cantSur = 0;

for (let i = 1; i <= votantesNorte.length; i++) {
  cantNorte ++;
}
for (let i = 1; i <= votantesCentro.length; i++) {
  cantCentro ++;
}
for (let i = 1; i <= votantesSur.length; i++) {
  cantSur ++;
}

resultNorte.innerHTML = cantNorte;
resultCenter.innerHTML = cantCentro;
resultSouth.innerHTML = cantSur;

if (cantNorte > cantSur && cantNorte> cantCentro) {
  totalVotantes.innerHTML = 'Norte'
} else if (cantSur > cantCentro) {
  totalVotantes.innerHTML = 'Sur'
} else if (cantNorte === cantSur && cantNorte === cantCentro) {
  totalVotantes.innerHTML = 'las 3 zonas tuvieron la misma cantidad de votantes'
} else if (cantNorte === cantSur && cantNorte > cantCentro) {
  totalVotantes.innerHTML = 'las zonas sur y norte tuvieron los mismo votantes'
} else if (cantNorte === cantCentro && cantNorte > cantSur) {
  totalVotantes.innerHTML = 'las zonas centro y norte tuvieron los mismo votantes'
} else if (cantSur === cantCentro && cantCentro > cantNorte) {
  totalVotantes.innerHTML = 'las zonas centro y sur tuvieron los mismo votantes'
} else {
  totalVotantes.innerHTML = 'Centro'
}
}
























