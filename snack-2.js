function lanciaDado() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) {
        reject("Il dado si è incastrato!");
      } else {
        const risultato = Math.floor(Math.random() * 6) + 1;
        resolve(risultato);
      }
    }, 3000);
  });
}

function creaLanciaDado() {
  let ultimo = null;

  return function () {
    return lanciaDado().then(numero => {
      if (numero === ultimo) {
        console.log("Incredibile!");
      }
      ultimo = numero;
      return numero;
    });
  };
}

const dado = creaLanciaDado();

dado().then(console.log).catch(console.error);
