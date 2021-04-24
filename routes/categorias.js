const { Router } = require( 'express' );
const { check } = require('express-validator');
const { crearCategory } = require('../controller/category.js');

const { validarJWT, validarCampos } = require('../middlewares');

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
    router.post('/', [
        validarJWT,
        check('userName', 'El nombre es obligatorio').not().isEmpty(),
        validarCampos
    ], crearCategory  );

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