// Ejemplo de utilizacion 

const fs = require('fs');
//no hace falta que se utilize el mismo nombre fs

const date = new Date();
const fecha_y_hora = date.toLocaleString();
const ruta = './contenido.txt';




fs.writeFile(ruta,fecha_y_hora,(err) => {
    if(err){
        console.log(err);
    }else {
        console.log('Actualizado!');
    }})
   

fs.readFile(ruta, 'utf-8', (err, res) => {
    console.log(err ? err : res);
})

// en el console.log reemplaza alif y else , aca dice si tira un error , mostrame error, sino mostrame el resultado

