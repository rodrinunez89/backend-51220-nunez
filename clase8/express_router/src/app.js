const express = require('express');
const router = require('./routes/users.router');

const puerto = 3000;

const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended:true }));

server.use('/api',router);
server.use('/public', express.static(`${__dirname}/public`));


server.listen (puerto, () => {

    console.log(`Servidor iniciado en puerto ${puerto}`)
}
)