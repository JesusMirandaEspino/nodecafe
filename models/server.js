const express = require( 'express' );
const cors = require('cors')
const { dbConection } = require( '../database/config.js' );


//TODO clase server 
class Server {

constructor(){

    //variables para asignar express
    this.app = express();
    this.port = process.env.PORT;


    this.paths = {
        auth:        '/api/auth',
        buscar:      '/api/buscar',
        categorias:  '/api/categorias',
        products:    '/api/products',
        usuarios:    '/api/users',
        uploads:    '/api/uploads',
        
    }


    //Conectar a Base de datos
    this.conectarDB();

    //middlewares
    this.middlewares();

    this.routes();
}


async conectarDB(){
    await dbConection();
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

    this.app.use(   this.paths.auth,        require('../routes/auth') );
    this.app.use(   this.paths.categorias,  require('../routes/categorias') );
    this.app.use(   this.paths.buscar,      require('../routes/buscar') );
    this.app.use(   this.paths.uploads,      require('../routes/uploads') );
    this.app.use(   this.paths.products,    require('../routes/products') );
    this.app.use(   this.paths.usuarios,    require('../routes/user') );
}



listen(){
    this.app.listen( this.port, () => {
        console.log( 'Servidor corriendo en el puerto', this.port );
    }  );   
}


}



module.exports = Server;