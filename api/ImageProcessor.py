from flask import request, Response, jsonify
from flask_restful import Resource
from Image import Image

class ImageProcessor(Resource):
  """Processes RESTful requests for image processing"""

  def post(self) -> Response:
    """Handles image transformation requests
    
    :return: A JSON response containing the transformed image
    """

    req: dict = request.get_json()
    image: Image = Image(req['image'])
    image.transform(req['transformations'])
    transformedImage: str = image.getTransformedImage()
    res: Response = jsonify({'image': transformedImage})
    return res
