from flask import request, jsonify
from flask_restful import Resource
from Image import Image

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
