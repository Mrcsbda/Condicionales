const clientsContainer = document.querySelector(".clients");
let resultClients = document.querySelector(".totalClients");
let resultSales = document.querySelector(".totalSales");

function addClients() {
  let client = document.createElement("section");
  client.className = "newClient";
  client.innerHTML = `
  <label for="client"> Cliente </label>
  <input id="client" type="number" required> 
  <button onclick="removeClient(event)"> (-) Eliminar </button>
  `;
  clientsContainer.appendChild(client);
}

function removeClient(event) {
  return event.target.parentElement.remove();
}

function calculate() {
  let sales = document.querySelectorAll("#client");
  let totalClients = 0;
  let totalSales = 0;

  for (const iterator of sales) {
    totalClients++;
    totalSales += +iterator.value;
  }
  resultClients.innerHTML = totalClients;
  resultSales.innerHTML = totalSales;
}
