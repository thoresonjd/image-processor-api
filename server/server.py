from flask import Flask
from flask_restful import Api, Resource

app = Flask(__name__)
api = Api(app)

def main() -> None:
  app.run(port=6969, debug=True)

if __name__ == '__main__':
  main()