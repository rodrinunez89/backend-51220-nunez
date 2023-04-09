const http = require ('http');

const puerto = 8080;

const servidor = http.createServer((solicitud, respuesta)=> { //req,res (request, response)
respuesta.end('Backend activado satisfactoriamente!');
});

servidor.listen(puerto, ()=> {
    console.log(`Servidor activo en puerto ${puerto}`);
});