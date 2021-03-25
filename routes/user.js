const { Router } = require( 'express' );

const {  usersGet, usersPost, usersPut, usersDelete, usersPath } = require( '../controller/user' );

const router = Router();

    router.get( '/',  usersGet  );

    router.put( '/:id', usersPut );

    router.post( '/', usersPost );

    router.delete( '/', usersDelete );

    router.patch( '/',  usersPath );


    module.exports = router;