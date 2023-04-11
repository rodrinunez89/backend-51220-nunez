const express = require ('express');
const {ProductManager} = require('./product_manager');

// CREAMOS EL PUERTO

const puerto = 8080;

const server = express();

server.use(express.urlencoded({ extended: true }));

const manager = new ProductManager

// UTILIZO GET CON UN ENDPOINT
server.get('/', (req,res)=>{
    console.log('Server response');
    res.send('Servidor Express');
});

server.get('/products', (req,res)=>{
    const verproduct = manager.getProducts();
    res.send(verproduct);
});


server.get('/products/:pid', (req,res)=>{
    const verProductId = manager.getProductsById(req.params.pid);
    res.send(verProductId);
})