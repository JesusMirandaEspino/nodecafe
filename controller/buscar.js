const { response }  = require('express');


const buscar = ( req, res = reponse ) => {
    res.json({
        msg: 'Buscar'
    });
}




module.exports = {
    buscar 
}