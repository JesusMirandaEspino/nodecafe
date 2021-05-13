const { response } = require("express");
const { subirArchivo } = require('../helpers');



const cargarArchivo = async ( req, res = response ) => {


    console.log( req.files.archivo );

    // validar si se envio un archivo
    if (!req.files || Object.keys(req.files).length === 0  || !req.files.archivo ) {
        res.status(400).json({ msg: 'No hay archivo para enviar' });
        return;
    }

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

    res.json({
        id, 
        coleccion
    });
}


module.exports = {
    cargarArchivo,
    actualizarImagen
}