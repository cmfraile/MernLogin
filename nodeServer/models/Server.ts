import express , { Application, Router } from 'express';
import { dataBaseConnection } from '../database/configDB';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import * as controllers from '../controllers';


class Server {

    private app:Application;
    private port:string;

    constructor(){
        this.app    =   express() ;
        this.port   =   process.env.PORT || '8000' ;
        this.middlewares();
        //this.databaseTasks();
        this.routes();
    }

    private middlewares(){
        this.app.use(express.json());
        this.app.use(cors());
        this.app.options('*',cors());
        this.app.use(fileUpload({useTempFiles:true,tempFileDir:'/tmp/',createParentPath:true}));
    };

    private routes(){

        const controllersIndexed:{[key:string]:any} = {...controllers}
        const apiPointer:string[] = ['ping','user'];

        let pathCrafter:{[key:string]:{route:string,router:Router}} = {} ;
        apiPointer.map(x => {
            pathCrafter[x] = {
                route:`/api/${x}`,
                router:controllersIndexed[`${x}Router`]
            }
        });

        Object.keys(pathCrafter).map(x => {
            const { route , router } = pathCrafter[x];
            this.app.use( route , router );
        });

    }

    private async databaseTasks(){
        await dataBaseConnection();
    };

    //private routes(){}

    public listen(){ this.app.listen(this.port) ; console.log('Backend ON') };

}

export default Server ;

/*
    
    */