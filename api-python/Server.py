from flask import Flask
from flask_cors import CORS
from flask_restful import Api
from ImageProcessor import ImageProcessor

def main() -> None:
    """Hosts the ImageProcessor API via a RESTful API server"""

    app: Flask = Flask(__name__)
    api: Api = Api(app)
    cors: CORS = CORS(app)
    api.add_resource(ImageProcessor, '/image-processor/')
    app.run(port=2022)

if __name__ == '__main__':
    main()
  
