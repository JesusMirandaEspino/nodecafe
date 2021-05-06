const { response }  = require('express');
const { ObjectId } = require('mongoose').Types;

const {     Category, User, Product } = require('../models');


const coleccionesPermitidas = [
    'user', 
    'category',
    'product',
    'roles'

];



const buscarUsuario = async ( termino = '',  res = response ) => {
    const esMongoID = ObjectId.isValid( termino );

    if( esMongoID  ){
        const user = await User.findById( termino );

        return res.json({
            results:  ( user ) ? [ user ] : []
        });
    }


    const regex = new RegExp( termino, 'i' );

    const users = await User.find( { 
        $or: [ { userName: regex  }, { userEmail: regex  }],
        $and: [ { userStatus: true } ]
    } );
    res.json({
            results: users
        });
}




const buscar = ( req, res = reponse ) => {

    const { coleccion, termino  }  = req.params;


    if( !coleccionesPermitidas.includes(coleccion) ){
        return res.status(400).json({
            msg: `Las colecciones permitidas son ${ coleccionesPermitidas }`
        });
    }


    switch( coleccion ){

        case  'user': buscarUsuario( termino, res );

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




}




module.exports = {
    buscar 
}