from flask import Flask, request
from flask_restful import Api, Resource
from flask_cors import CORS

app = Flask(__name__)
api = Api(app)
cors = CORS(app)

class RequestHandler(Resource):
  def post(self):
    return request.get_json()

  def get(self):
    return {'REST': 'GET'}

api.add_resource(RequestHandler, '/')

def main() -> None:
  app.run(port=6969, debug=True)

if __name__ == '__main__':
  main()