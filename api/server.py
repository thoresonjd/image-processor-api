from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_restful import Api, Resource
from Image import Image

app = Flask(__name__)
api = Api(app)
cors = CORS(app)

class ImageProcessor(Resource):
  """Processes RESTful requests for image processing"""

  def post(self):
    """Handles image transformation requests
    
    :return: A JSON response containing the transformed image
    """

    req = request.get_json()
    image = Image(req['image'])
    image.transform(req['transformations'])
    transformedImage = image.getTransformedImage()
    res = jsonify({'image': transformedImage})
    return res

api.add_resource(ImageProcessor, '/')

def main():
  """Hosts the ImageProcessor server"""

  app.run(port=2022, debug=True)

if __name__ == '__main__':
  main()
  