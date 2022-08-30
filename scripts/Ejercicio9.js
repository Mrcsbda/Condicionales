
//Votantes por sector
const votantes = [
  {
    norte: ["Camilo", "Alejandro", "Stiven"],
  },
  {
    sur: ["Andres", "Sara"],
  },
  {
    centro: ["Sebastian", "Andrea", "Lulu", "Susi", "Zeus"],
  },
];

let Norte = 0;
let Sur = 0;
let Centro = 0;

//Ciclo utilizado para saber la cantidad de votantes por seccion
votantes.forEach((secciones) => {
  if (secciones.norte) {
    Norte = secciones.norte.length;
  } else if (secciones.sur) {
    Sur = secciones.sur.length;
  } else {
    Centro = secciones.centro.length;
  }
});

//Condicional utilizado para saber cual seccion tuvo más votantes
if (Norte > Sur && Norte > Centro) {
  console.log(
    "La cantidad de votantes de norte son,",
    Norte,
    " de sur son ",
    Sur,
    " y de centro son ",
    Centro,
    " Por ende la mayor cantidad de votantes fueron en Norte"
  );
} else if (Sur > Centro) {
  console.log(
    "La cantidad de votantes de norte son,",
    Norte,
    " de sur son ",
    Sur,
    " y de centro son ",
    Centro,
    " Por ende la mayor cantidad de votantes fueron en Sur"
  );
} else {
  console.log(
    "La cantidad de votantes de norte son,",
    Norte,
    " de sur son ",
    Sur,
    " y de centro son ",
    Centro,
    " Por ende la mayor cantidad de votantes fueron en Centro"
  );
}
