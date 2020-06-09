<<<<<<< HEAD
const express = require('express');
const router = express.Router();
const Model = require('../models/model');

// Todos los registros
router.get('/', async (req, res) => {
    const modelos = await Model.find();
    res.json(modelos);
});

// Rigistro por ID
router.get('/:id', async (req,res) =>{
    const data = await Model.findById(req.params.id);
    res.json(data);
});

// Alta
router.post('/', async (req, res) =>{
    const {titulo,descripcion} = req.body;
    const modelo = new Model({titulo, descripcion});
    modelo.save();
    res.json({
        status: 'alta creada'
    });
});

// Actualizar registro
router.put('/:id', async (req,res) =>{
    const {titulo, descripcion} = req.body;
    const newModel = {titulo,descripcion};
    await Model.findByIdAndUpdate(req.params.id,newModel);
    res.json({
        status: 'actualización de registro correcta'
    });
});

// Baja
router.delete('/:id', async (req,res) =>{
    await Model.findByIdAndRemove(req.params.id);
    res.json({
        status: 'registro eliminado'
    });
});


=======
const express = require('express');
const router = express.Router();
const Model = require('../models/model');

// Todos los registros
router.get('/', async (req, res) => {
    const modelos = await Model.find();
    res.json(modelos);
});

// Rigistro por ID
router.get('/:id', async (req,res) =>{
    const data = await Model.findById(req.params.id);
    res.json(data);
});

// Alta
router.post('/', async (req, res) =>{
    const {titulo,descripcion} = req.body;
    const modelo = new Model({titulo, descripcion});
    modelo.save();
    res.json({
        status: 'alta creada'
    });
});

// Actualizar registro
router.put('/:id', async (req,res) =>{
    const {titulo, descripcion} = req.body;
    const newModel = {titulo,descripcion};
    await Model.findByIdAndUpdate(req.params.id,newModel);
    res.json({
        status: 'actualización de registro correcta'
    });
});

// Baja
router.delete('/:id', async (req,res) =>{
    await Model.findByIdAndRemove(req.params.id);
    res.json({
        status: 'registro eliminado'
    });
});


>>>>>>> 978705c0766f767046ce7c0d36c80e5666f1f456
module.exports = router;