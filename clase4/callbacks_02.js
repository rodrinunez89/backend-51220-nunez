const sumar = (n1, n2) => n1 + n2;

const restar = (n1,n2) => n1 - n2;

const dividir = (n1,n2) => n1/n2;

const ejecutar = (n1, n2, cb) => {// cb= funcion callback que paso como argumento
console.log(`Numero a procesar : ${n1} y ${n2}`);
const resultado = cb(n1, n2);
console.log(`resultado: ${resultado}`);
}

ejecutar (3,5, sumar);