const { Router } = require( 'express' );
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar.js');

const router = Router();


    router.get('/', ( req, res ) => {
        res.json({
            msg: 'Todo ok'
        });
    });



module.exports = router; 