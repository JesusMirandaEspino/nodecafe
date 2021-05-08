const path = require('path');


const { response } = require("express");




const cargarArchivo =  ( req, res = response ) => {


    console.log( req.files.archivo );



    

    if (!req.files || Object.keys(req.files).length === 0  || !req.files.archivo ) {
        res.status(400).json({ msg: 'No hay archivo para enviar' });
        return;
    }

    const { archivo } = req.files;
    const shortname = req.files.archivo.name.split('.'); 
    const extension = shortname[ shortname.length  - 1 ];


    //validar extension
    const extensionesValidas = [ 'jpg', 'png', 'jpeg', 'gif' ];


    if( !extensionesValidas.includes(extension) ){
        return res.status( 400 ).json( {
            msg: `La extension ${ extension } no es el tipo valida, Las permitidas son ${extensionesValidas}`
        } );
    }




    /*
    const uploadPath = path.join(  __dirname, '../uploads/',  archivo.name) ;

    archivo.mv(uploadPath, (err) =>  {

        if (err) {
        return res.status(500).json({err});
        }

    res.json( { msg: 'File uploaded to ' + uploadPath });
    });

*/


} 



module.exports = {
    cargarArchivo
}