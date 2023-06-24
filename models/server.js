import express from "express"
import cors from "cors";
import fileupload from "express-fileupload";
import '../config.js'
import { router } from "../routes/init.js";

export class Server {
    constructor() {
        this.app = express()
        this.port = process.env.PORT
        this.paths = {
            init: '/',
        }
        //Middlewares
        this.middlewares();
        //Rutas de app
        this.routes();
    }

    middlewares() {
        //cors
        this.app.use(cors());
        this.app.use(express.json());
        // Guardar los archivos subido en una carpeta llamada uploads
        this.app.use(fileupload({
            useTempFiles: true,
            tempFileDir: './uploads'
        }))
        //Hacer publica la carpeta images
        // this.app.use(express.static('images'))
    }

    routes() {
        this.app.use(this.paths.init, router);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Example app listening on port ${this.port}`)
        })
    }

}
