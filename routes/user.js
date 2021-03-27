const { Router } = require( 'express' );
const { check } = require('express-validator');

const {  usersGet, usersPost, usersPut, usersDelete, usersPath } = require( '../controller/user' );

const router = Router();

    router.get( '/',  usersGet  );

    router.put( '/:id', usersPut );

    router.post( '/', [
        check('userEmail', 'El correo no es valido').isEmail()
    ] , usersPost );

    router.delete( '/', usersDelete );

    router.patch( '/',  usersPath );


    module.exports = router;