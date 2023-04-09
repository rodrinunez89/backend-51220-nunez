const express = require ('express');

const puerto = 8080;

const servidor = express();


servidor.get('/', (req,res)=>{
    res.send('Servidor Express');
});


// habilito un endpoint para solicirudes get a /saludo
servidor.get('/saludo', (req,res)=>{
    res.send('Esta es el saludo del servidor Express');
});

servidor.get('/saludo/:nombre', (req,res)=>{
    
    res.send(`Esta es el saludo del servidor Express a ${req.params.nombre}`);
});



servidor.listen(puerto, ()=> {
    console.log(`Servidor express en puerto ${puerto}`);
});