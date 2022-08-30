const productsContainer = document.querySelector(".products-container");
let acumulador = 0;

function addProduct(event) {
  acumulador = acumulador + 1;
  let product = document.createElement("div");
  product.className = "newproduct";
  product.innerHTML = `
   <label>Precio del Producto ${acumulador}</label>
   <input type="number">
   <select class="options">
     <option value="" class="value" selected hidden>Etiqueta del producto</option>
     <option value="value-1">Etiqueta Roja</option>
     <option value="value-2">Etiqueta Azul</option>
     <option value="value-3">Etiqueta Gris</option>
     <option value="value-4">Etiqueta Amarilla</option>   
   </select>
   <button onclick="removeProduct(event)">(-) Eliminar Producto</button>
    `;
  productsContainer.appendChild(product);
}

function removeProduct (event) {
  acumulador -= 1;
  return event.target.parentElement.remove();
}

let total = 0;


