const productsContainer = document.querySelector(".products-container");
let acumulador = 0;
let productos = [];
let resultado = document.querySelector('.result')

function addProduct() {
  acumulador = acumulador + 1;
  let product = document.createElement("div");
  product.id = acumulador;
  product.className = "newproduct";
  product.innerHTML = `
   <label>Precio del Producto ${acumulador}</label>
   <input type="number">
   <select id="values" class="options">
     <option value="" class="value" selected hidden>Etiqueta del producto</option>
     <option class="value-1">Etiqueta Roja</option>
     <option class="value-2">Etiqueta Azul</option>
     <option class="value-3">Etiqueta Gris</option>
     <option class="value-4">Etiqueta Amarilla</option>   
   </select>
    `;
  
  productsContainer.appendChild(product);

}



function valorPagar () {

  let total = 0;

  const divproductos = document.querySelectorAll('.products-container .newproduct');

  for (const iterator of divproductos) {
    productos.push ({
    precio: +iterator.querySelector('input').value,
    etiqueta: iterator.querySelector('select').value,
    })
  }

  productos.forEach(producto =>{
  if (producto.etiqueta === "Etiqueta Roja") {
  total = total + (producto.precio-(producto.precio*0.2))
  } else {
  total = total + producto.precio;
  }
  })
  
  
  resultado.innerHTML = total;
  productos = [];
}


