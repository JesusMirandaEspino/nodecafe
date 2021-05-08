const path = require('path');


const { response } = require("express");




const cargarArchivo = async ( req, res = response ) => {


    console.log( req.files.archivo );
    

    if (!req.files || Object.keys(req.files).length === 0  || !req.files.archivo ) {
        res.status(400).json({ msg: 'No hay archivo para enviar' });
        return;
    }

    const { archivo } = req.files;

    const uploadPath = path.join(  __dirname, '../uploads/',  archivo.name) ;

    await archivo.mv(uploadPath, (err) =>  {

        if (err) {
        return res.status(500).json({err});
        }

    res.json( { msg: 'File uploaded to ' + uploadPath });
    });




    res.json({
        msg: 'Hola mundo'
    });

} 



module.exports = {
    cargarArchivo
}