import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { Image } from './Image';
import { ImageVerifier } from './ImageVerifier';

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
        this.expressApp.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit: 50000}));
        this.expressApp.use(bodyParser.json({ limit: '50mb' }));
        this.expressApp.use(cors(options));
    }

    private endpoints(): void {
        this.expressApp.post('/image-processor/', (req, res) => {

            // Saturate and grayscale % cannot be processed via the TS implementation
            req.body['transformations'].forEach((t: string) => {
                if (/grayscale-percentage\(-?([0-9]*[.])?[0-9]+\)/.test(t) ||
                    /saturate\(-?([0-9]*[.])?[0-9]+\)/.test(t)) {
                    res.status(418).send(
                        "ERROR: I'm a teapot. " +
                        "I really don't want to process this right now, " +
                        "nor am I able to.");
                    return;
                }
            });

            // Check if image exists
            let imageVerifier: ImageVerifier = new ImageVerifier();
            if (!imageVerifier.hasImage(req.body['image'])) {
                res.status(400).send("ERROR: No image provided");
                return;
            }

            // Check if image is of supported type
            if (!imageVerifier.isSupportedImage(req.body['image'])) {
                res.status(415).send("ERROR: Unsupported media type");
                return;
            }
            
            // Transform image
            let image: Image = new Image(req.body['image']);
            image.transform(req.body['transformations']);
            let transformedImage: Promise<string> = image.getImage();

            // Send image response
            transformedImage.then(result =>
                res.status(200).json({ "image": result })
            );
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