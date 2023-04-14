const express = require('express');
const uploader = require('../utils');

const router = express.Router();

const users = [];

const reportarTiempo = (req,res,next)=>{
    console.log(`Time to report: ${Date.now()}`);
    next();
}

router.get('/users', (req, res) => {
    //cuerpo de la base de datos
    res.status(200).send(users)
})

router.post('/users',uploader.single('file'), (req, res) => {
    // faltaria validar datos de usuario primero
users.push(req.body);
if(req.file) {console.log(req.file)}
res.status(200).send({estado: 'ok' , mensaje: 'users registrado'});
});

module.exports = router;
