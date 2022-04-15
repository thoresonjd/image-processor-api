from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_restful import Api, Resource
from Image import Image

app: Flask = Flask(__name__)
api: Api = Api(app)
cors: CORS = CORS(app)

class ImageProcessor(Resource):
  """Processes RESTful requests for image processing"""

  def post(self):
    """Handles image transformation requests
    
    :return: A JSON response
    """

    req = request.get_json()
    image = Image(req['image'])
    image.transform(req['transformations'])
    transformedImage: str = image.getTransformedImage()
    res = jsonify({'image': transformedImage})
    return res

api.add_resource(ImageProcessor, '/')

def main() -> None:
  """Hosts the ImageProcessor server"""

  app.run(port=6969, debug=True)

if __name__ == '__main__':
  main()
  