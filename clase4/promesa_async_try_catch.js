//Declaracion standard de promesa

const dividir = (nro1, nro2) => {
    return new Promise((resolve, reject) => {
        if (nro2 === 0) reject('División por 0!');
        resolve(nro1 / nro2);
    });
}

// Consumo standard de promesas con then y catch
const procesar = (n1, n2) => {
    dividir(n1, n2)
    .then((datos) =>{
        console.log(datos);
    })
    .catch((datos) =>{
        console.log(datos);
    })
 console.log('Esto va a ejecutarse luego de finalizado el proceso');   
}

procesar(2,0);

//----------------------------------------------------------------
// ASINC AWAIT 

const procesardatos = async (n1, n2) => {
    
try {
 const resultado = await dividir (n1, n2);
   console.log(resultado);
   console.log('Esto va a ejecutarse luego de finalizado el proceso 2');   
}
catch(errors){
    console.log(errors);
}
}

procesardatos(2,0);