const { response } = require('Express');


const login = ( req, res = response ) =>  {

    res.json({
        msg: 'login'
    });


}