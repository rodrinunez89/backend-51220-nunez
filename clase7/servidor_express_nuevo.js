const express = require ('express');

const puerto = 8080;

const usuarios = [
    { id: 3, nombre: 'Rodrigo', apellido: 'Nunez', edad: 34, correo: 'rodrigo.nmartinez@gmail.com' }
];

const server = express();

// server.use(express.json);
server.use(express.urlencoded({ extended: true }));


server.get('/usuario', (req, res) => {
  // Para ver todos los usuarios
    res.send(usuarios);
});


// Solicitud get con retorno objeto json
server.get('/usuario/:id_usuario', (req, res) => {
    // Deberiamos verificar con req.params.id_usuario y buscar en la matriz , base de datos, etc...
    // la coincidencia de ese usuario 

    res.send(usuarios[0]);
});

server.post('/usuario', (req, res) => {
res.send('Endpoint alcanzado');
console.log(req.body); 

});


server.listen(puerto, ()=> {
    console.log(`Servidor express en puerto ${puerto}`);
});