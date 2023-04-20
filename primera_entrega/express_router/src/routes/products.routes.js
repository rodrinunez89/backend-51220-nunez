const express = require('express');
const path = require('path');
const manager = require('../productManager/product_manager');
const productManager = new manager(path.resolve(__dirname, '../productManager/products.json'));

const router = express.Router();

router.get('/', (req,res)=>{
    let limit = parseInt(req.query.limit)
    productManager.getProducts().then((products)=>{
        if(limit){
            products = products.slice(0,limit);       
        }
        res.send(products);
    })

})


router.get('/:pid', (req,res)=>{
    const verProductId = productManager.getProductsById(req.params.pid);
    verProductId.then((product)=>{
        if(product.length) {
            res.send(product)
        } else{
            res.send({status:400, message:"Product not found"})
        }
       
    })
});


router.post('/', (req,res)=>{
    const product = req.body;
    
    const addProduct = productManager.addProduct(product);
    if(addProduct){
        res.send({status:200, message:`Product added: ${addProduct}`})
    } else {
        res.send({status:400, message:"Product not added"})
    }
    
    
});

router.put('/:pid', async (req,res)=>{
    const id = req.params.pid;
    const product = req.body;
    if(req.body.code){
        const code = await productManager.getCode(req.body.code);
        if(!code){
            const updateProduct = productManager.updateProduct(id, product);
            res.send({status:200, message:"Product updated"})
        } else {
            res.send({status:400, message:"Code repited, product code already exists"})
        }
    } else {
        const updateProduct = productManager.updateProduct(id, product);
        res.send({status:200, message:"Product updated"})
    }
});

router.delete('/:pid', async (req,res)=>{
    const id = req.params.pid;
    const deletedProduct = await productManager.deleteItemById(id);
    if(deletedProduct){
        res.send({status:200, message:"Product deleted"})
    } else {
        res.send({status:400, message:"Product nof found"})
    }
});





module.exports = router;
