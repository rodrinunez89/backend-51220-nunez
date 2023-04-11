const express = require ('express');

const puerto = 8080;

const server = express();
server.use(express.urlencoded({ extended: true }));

server.get('/', (req,res)=>{
    res.send('Servidor Express');
});


// habilito un endpoint para solicitar get a /saludo
server.get('/saludo', (req,res)=>{
    res.send('Esta es el saludo del servidor Express');
});


// Solicitud get con retorno html
server.get('/bienvenida', (req, res) => {
    res.send('<h1 style="color: blue;">Sean todos bienvenidos!</h1>');
});

// Solicitud get con retorno objeto json
server.get('/usuario', (req, res) => {
    res.send({ nombre: 'Rodrigo', apellido: 'Nunez', edad: 34, correo: 'rodrigo.nmartinez@gmail.com' });
});

// Solicitud get con parámetro (req.params)
// localhost:8080/bienvenida2/red
server.get('/bienvenida2/:color', (req, res) => {
    res.send(`<h1 style="color: ${req.params.color};">Sean todos bienvenidos!</h1>`);
});

// Solicitud get con retorno de query (req.query)
// localhost:8080/query?nombre=Rodrigo&apellido=Nunez
server.get('/saludo/:nombre', (req,res)=>{
    
    res.send(`Esta es el saludo del servidor Express a ${req.params.nombre}`);
});



server.listen(puerto, ()=> {
    console.log(`Servidor express en puerto ${puerto}`);
});