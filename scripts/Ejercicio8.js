
//Arreglo con informacion de los compradores y la cantidad que compraron
const ventas = [
  {
    cliente: "Susi",
    compras: [2000, 5000, 7000],
  },
  {
    cliente: "Lulu",
    compras: [10000, 4000, 3000],
  },
];

const montoTotalCliente = [];

//Ciclo para calcular el total comprado por cada cliente y almacenarlo en el arreglo montoTotalCliente
ventas.forEach((cliente) => {
  montoTotalCliente.push({
    nombre: cliente.nombre,
    compra: cliente.compras.reduce(
      (previousValue, currentValue) => previousValue + currentValue
    ),
  });
});

let totalCompras = 0;
let acumuladorClientes = 0;

//Ciclo utilizado para calcular total de de clientes y el total de compras
montoTotalCliente.forEach((cliente) => {
  if (cliente.compra) {
    acumuladorClientes++;
    totalCompras += cliente.compra;
  }
});

console.log(
  "En total hubo ",
  acumuladorClientes,
  " clientes y la cantidad total de ventas fue",
  totalCompras
);
