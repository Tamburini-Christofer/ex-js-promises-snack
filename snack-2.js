const lanciaDado = () => {
    return new Promise((resolve, reject) => {
        console.log("sto lanciando il dado...")
        setTimeout(() => {
            const isIncastrato = Math.random() < 0.2;
            if (isIncastrato) {
                reject("il dado si è incastrato")
            } else {
                const risultato = Math.floor(Math.random() * 6) + 1;
                resolve(risultato);
            }
        }, 3000)
    })
}

lanciaDado()
    .then(risultato => console.log(`Il dado ha lanciato:`, risultato))
    .catch(err => console.error(err));



const creaLanciaDado = () => {

    let ultimoLancio = null;

    return function () {
        return new Promise((resolve, reject) => {
            console.log("sto lanciando il dado...")
            setTimeout(() => {
                const isIncastrato = Math.random() < 0.2;
                if (isIncastrato) {
                    ultimoLancio = null;
                    reject("il dado si è incastrato")
                } else {
                    const risultato = Math.floor(Math.random() * 6) + 1;
                    if(risultato === ultimoLancio){
                        console.log("incredibile!")
                    }
                    ultimoLancio = risultato;
                    resolve(risultato);
                }
            }, 3000)
        })
    }
}

const lanciaDadoConMemoria = creaLanciaDado();

lanciaDadoConMemoria()
        .then(risultato => console.log(`Il dado ha lanciato:`, risultato))
        .catch(err => console.error(err));

