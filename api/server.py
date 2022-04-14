from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_restful import Api, Resource
from requests import Response
from Image import Image

app: Flask = Flask(__name__)
api: Api = Api(app)
cors: CORS = CORS(app)

class RequestHandler(Resource):

  def post(self) -> Response:
    req = request.get_json()
    image: Image = Image(req['image'])
    image.transform(req['transformations'])
    transformedImage: str = image.getTransformedImage()
    res: Response = jsonify({'image': transformedImage})
    return res

api.add_resource(RequestHandler, '/')

def main() -> None:
  app.run(port=6969, debug=True)

if __name__ == '__main__':
  main()
  