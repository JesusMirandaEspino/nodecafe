const { response }  = require('express');


const coleccionesPermitidas = [
    'user', 
    'category',
    'product',
    'roles'

];


const buscar = ( req, res = reponse ) => {

    const { coleccion, termino  }  = req.params;


    if( !coleccionesPermitidas.includes(coleccion) ){
        return res.status(400).json({
            msg: `Las colecciones permitidas son ${ coleccionesPermitidas }`
        });
    }


    switch( key ){

        case  'user':

        break;

        case 'category':

        break;

        case 'product':

        break;

        default: 
        res.status(500).json({
            msg: `Se le olvido hacer esta busqueda`
        });
    }



    res.json({
        coleccion, 
        termino
    });
}




module.exports = {
    buscar 
}