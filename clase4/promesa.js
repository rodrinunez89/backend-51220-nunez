const dividir = (n1, n2) => {
    return new Promise((resolve, reject)=> {
        if(n2 !== 0 ) {
            resolve (n1/n2);

        }else {
            reject (`No se puede dividir`);

        }
    });
}
//console.log(dividir(20,2));

dividir(20,2)
.then ((resultado) => {console.log(resultado)});
// .catch ((err) => {console.log(err)});
// .finally((done) => {});


