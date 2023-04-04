/*
Generador de numeros aleatorios al azar 

*/

const ctd_numeros = 10;
const rango_min = 1 ;
const rango_max = 20 ;


// floor = genera un numero aleatorio redondeado hacia abajo

const listadoNumeros = [];
const listadoSalidad = {}; // creamos un objeto vacio
   
for (let i = 0; i < ctd_numeros; i++) {
    const nroRandom = Math.floor(Math.random() * rango_max) + rango_min;
    listadoNumeros.push(nroRandom);
}

listadoNumeros.forEach((numero) => {
    if(listadoSalidad[numero]) {
        listadoSalidad[numero]++;
    }else {
        listadoSalidad[numero] = 1;
    }
});

console.log(listadoNumeros);
console.log(listadoSalidad);