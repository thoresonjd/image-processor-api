from flask import Flask, request
from flask_cors import CORS
from flask_restful import Api, Resource
import Image

app: Flask = Flask(__name__)
api: Api = Api(app)
cors: CORS = CORS(app)

class RequestHandler(Resource):

  def post(self):
    req = request.get_json()
    processor = Image(req['image'])
    processor.transform(req['transformations'])
    res = {'image': ''.join(map(chr, processor.getTransformedImage()))}
    return res;

api.add_resource(RequestHandler, '/')

def main() -> None:
  app.run(port=6969, debug=True)

if __name__ == '__main__':
  main()
  