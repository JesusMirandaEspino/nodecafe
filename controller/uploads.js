const path = require('path');

const { v4: uuidv4 } = require('uuid');


const { response } = require("express");




const cargarArchivo =  ( req, res = response ) => {


    console.log( req.files.archivo );

    // validar si se envio un archivo
    if (!req.files || Object.keys(req.files).length === 0  || !req.files.archivo ) {
        res.status(400).json({ msg: 'No hay archivo para enviar' });
        return;
    }


    //obtener extension del archivo
    const { archivo } = req.files;
    const shortname = req.files.archivo.name.split('.'); 
    const extension = shortname[ shortname.length  - 1 ];


    //validar extension
    const extensionesValidas = [ 'JPG', 'PNG', 'JPEG', 'GIF' ];
    if( !extensionesValidas.includes(extension) ){
        return res.status( 400 ).json( {
            msg: `La extension ${ extension } no es el tipo valida, Las permitidas son ${extensionesValidas}`
        } );
    }


    //mover arhivo a carpeta especifica
    const nameTemp = uuidv4() + '.' + extension;
    const uploadPath = path.join(  __dirname, '../uploads/',  nameTemp ) ;

    archivo.mv(uploadPath, (err) =>  {

        if (err) {
        return res.status(500).json({err});
        }

    res.json( { msg: 'File uploaded to ' + uploadPath });
    });




} 



module.exports = {
    cargarArchivo
}