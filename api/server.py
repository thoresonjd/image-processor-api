from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from flask_restful import Api, Resource
from ImageProcessorTest import ImageProcessorTest
from PIL import Image
from io import BytesIO
import base64

app: Flask = Flask(__name__)
api: Api = Api(app)
cors: CORS = CORS(app)

class RequestHandler(Resource):

  def post(self):
    req = request.get_json()

    # Decode
    decodedImage = base64.b64decode(req['image'])
    decodedBuf = BytesIO(decodedImage)
    decodedBuf.seek(0)

    # Transform
    image = Image.open(decodedBuf)
    res = image.transpose(Image.FLIP_LEFT_RIGHT)

    # Encode
    buffered = BytesIO()
    res.save(buffered, format="JPEG")
    img_str = base64.b64encode(buffered.getvalue())
    return jsonify({'image': ''.join(map(chr, img_str))})

api.add_resource(RequestHandler, '/')

# @app.route('/', methods=['POST'])
# def transformImage():
#   req = request.get_json()

#   # Decode
#   decodedImage = base64.b64decode(req['image'].split(';base64,')[1])
#   decodedBuf = BytesIO(decodedImage)
#   decodedBuf.seek(0)
#   image = Image.open(decodedBuf)
#   res = image.transpose(Image.FLIP_LEFT_RIGHT)

#   # Encode
#   buffered = BytesIO()
#   res.save(buffered, format="JPEG")
#   img_str = base64.b64encode(buffered.getvalue())
#   return jsonify({'image': ''.join(map(chr, img_str))})

def main() -> None:
  app.run(port=6969, debug=True)

if __name__ == '__main__':
  main()
  