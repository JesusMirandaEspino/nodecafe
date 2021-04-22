const { Router } = require( 'express' );
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar.js');

const router = Router();


// Obtener todas las categorias - publico
    router.get('/', ( req, res ) => {
        res.json({
            msg: 'get'
        });
    });

// Obtener una categoria por id - publico
    router.get('/:id', ( req, res ) => {
        res.json({
            msg: 'get - id'
        });
    });


// Crear una categoria - privado cualquier persona con un token valido
    router.post('/', ( req, res ) => {
        res.json({
            msg: 'Post'
        });
    });

// Actualizar la categoria - privado cualquier persona con un token valido
    router.put('/:id', ( req, res ) => {
        res.json({
            msg: 'Put'
        });
    });

// Borrar categoria Admin
    router.delete('/:id', ( req, res ) => {
        res.json({
            msg: 'Desactivar'
        });
    });


module.exports = router; 