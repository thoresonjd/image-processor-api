from flask import Flask
from flask_restful import Api, Resource
from flask_restful.utils import cors

app = Flask(__name__)
api = Api(app)
api.decorators=[cors.crossdomain(origin='*')]

class ImageProcessor(Resource):
  def get(self):
    return {"json": "data"}

api.add_resource(ImageProcessor, '/')

def main() -> None:
  app.run(port=6969, debug=True)

if __name__ == '__main__':
  main()