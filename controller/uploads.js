const { response } = require("express");
const { subirArchivo } = require('../helpers');



const cargarArchivo = async ( req, res = response ) => {


    console.log( req.files.archivo );

    // validar si se envio un archivo
    if (!req.files || Object.keys(req.files).length === 0  || !req.files.archivo ) {
        res.status(400).json({ msg: 'No hay archivo para enviar' });
        return;
    }

    // imagenes 
    const pathCompleto = await subirArchivo( req.files );


    res.json({ 
        path: pathCompleto
    });

} 



module.exports = {
    cargarArchivo
}