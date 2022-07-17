const { application } = require('express');
const express = require ('express');
const { Vet } = require('../models/vet');
const router = express.Router();

router.get('/', async(req, res)=>{
    const vet = await Vet.find()
    res.send(vet);
})

router.post('/', async(req, res)=>{
    const vet = new Vet({
        nombre:         req.body.nombre,
        edad:           req.body.edad,
        direccion:      req.body.direccion,
        nresponsable:   req.body.nresponsable,
    })
    const resultado = await vet.save()
    res.status(201).send(resultado)
})

module.exports = router; 

