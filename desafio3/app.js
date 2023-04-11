
const express = require ('express');
const ProductManager = require('./product_manager');

// CREAMOS EL PUERTO

const puerto = 8080;


const manager = new Product ('./products.json');

const server = express();

// UTILIZO GET CON UN ENDPOINT
server.get('/', (req,res)=>{
    console.log('Server response');
    res.send('Servidor Express');
});

server.get('/products', (req,res)=>{
   
    res.send(manager.getProducts());
});


server.get('/products/:pid', (req,res)=>{
    const verProductId = manager.getProductsById(req.params.pid);
    res.send(verProductId);
})

app.get('/products', (req, res) => {
    res.send(PM.getProducts());
  })