const { response, request } = require( 'express' )
const jwt =  require('jsonwebtoken');


const validarJWT = (    req = request ,  res = response, next  ) => {
    
    const token = req.header( 'x-token' );

    if( !token ){
        return res.status(401).json({
            msg: 'No hay Token en la peticion'
        });
    }


    try{

        jwt.verify( token, process.env.SECRETORPRIVATEKEY );

        next();
    }catch( err ){
        console.log( err );
        res.status(401).json({
            msg: 'Token no valido'
        })
    }

    console.log( token );



}



module.exports = {
    validarJWT
}