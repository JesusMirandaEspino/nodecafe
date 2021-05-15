const { response } = require("express");
const { subirArchivo } = require('../helpers');

const { User, Product } = require('../models');



const cargarArchivo = async ( req, res = response ) => {


    console.log( req.files.archivo );

 

        try{

        // imagenes 
        const pathCompleto = await subirArchivo( req.files, undefined, 'img' );

        res.json({ 
            path: pathCompleto
        });

        }catch(msg){
            res.status(400).json({ msg });
        }
} 


const actualizarImagen = async ( req, res = response ) => {



    const { id, coleccion } = req.params;

    let modelo;

    switch( coleccion ){
        case 'users': 
            modelo = await User.findById(id);
            if( !modelo ){ 
                return res.status(400).json({ msg: `No existe un usuario con el id ${id}` });
            }

        break;

        case 'products':
            modelo = await Product.findById(id);
            if( !modelo ){ 
                return res.status(400).json({ msg: `No existe el producto con el id ${id}` });
            }       

        break;



        default:
            return res.status(500).json( { msg: 'Se me olvido validar esto' } );

    }

        const pathCompleto = await subirArchivo( req.files, undefined, coleccion );
        modelo.img = pathCompleto;

        await modelo.save();

    res.json({
        modelo
    });
}


module.exports = {
    cargarArchivo,
    actualizarImagen
}