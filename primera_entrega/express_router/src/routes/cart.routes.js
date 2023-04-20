const express = require('express');
const cartManager = require('../cartManager/cart_manager');
const manager = new cartManager();

const router = express.Router();


router.post('/', async (req, res) => {
    const body = req.body;
    const cart = await manager.addCart(body);
    if(cart){
        res.status(200).send({status:200, message:"Cart Added"})
    } else {
        res.status(400).send({status:400, message:"Send array of products"})
    }
});

router.post('/:cid/product/:pid', async (req, res) => {
    const quantity = parseInt(req.body.quantity);
    const cid = parseInt(req.params.cid);
    const pid = parseInt(req.params.pid);
    const cart = await manager.addProductToCart(cid,pid,quantity);
    if(cart){
        res.status(200).send({status:200, message:cart})
    } else {
        res.status(400).send({status:400, message:"Cart not found"})
    }

});


router.get('/:cid', async (req, res) => {
    const id = parseInt(req.params.cid);
    const cart = await manager.getCartsById(id)
    if(cart){
        res.status(200).send(cart.products)
    } else {
        res.status(400).send({status:400, message:"Cart not found"})
    }
});




module.exports = router;
