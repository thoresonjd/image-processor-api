import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';

const options: cors.CorsOptions = {
    origin: '*'
};

class ImageProcessor {

    private expressApp: express.Application;
    
    constructor() {
        this.expressApp = express();
        this.middleware();
        this.endpoints();
    }

    private middleware(): void {
        this.expressApp.use(bodyParser.urlencoded({ extended: true }));
        this.expressApp.use(bodyParser.json());
        this.expressApp.use(cors(options));
    }

    private endpoints(): void {
        this.expressApp.post('/image-processor/', (req, res) => {
            const data = req.body;
            console.log(data);
            res.send(data);
        });

        this.expressApp.get('/image-processor/', (req, res) => {
            res.send("ImageProcessor running");
        });
    }

    public getApp(): express.Application {
        return this.expressApp;
    }
}

export { ImageProcessor }