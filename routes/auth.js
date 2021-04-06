const { Router } = require( 'express' );
const { check } = require('express-validator');


const { validarCampos } = require('../middlewares/validar.js');

const { login } = require('../controller/auth');


const router = Router();

    router.post( '/login', [
        check( 'userEmail', 'El correo es obligatorio' ).isEmail(),
        check('userPassword', 'El password es obligatorio').not().isEmpty(),
        validarCampos
    ] ,  login  );






module.exports = router; 