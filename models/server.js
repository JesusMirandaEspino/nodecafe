const express = require( 'express' );
const cors = require('cors')

//TODO clase server 
class Server {

constructor(){

    //variables para asignar express
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = '/api/users';


    //middlewares
    this.middlewares();

    this.routes();
}


middlewares(){

    //cors
    this.app.use(cors());

    //Lectura y parseo del body
    this.app.use( express.json() );

    //directorio publico
    this.app.use( express.static( 'public' ) );
}

routes(){

    this.app.use(   this.usuariosPath , require('../routes/user') );

}



listen(){
    this.app.listen( this.port, () => {
        console.log( 'Servidor corriendo en el puerto', this.port );
    }  );   
}


}



module.exports = Server;