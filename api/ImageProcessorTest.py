from PIL import Image
from io import BytesIO
import base64

class ImageProcessorTest:
  def __init__(self, image, transformations) -> None:
    self.image: str = image
    self.transformations: list = transformations

  def getTransformedImage(self):
    res: Image = Image.open(self.image).transpose(Image.FLIP_LEFT_RIGHT)
    buffered: BytesIO = BytesIO()
    res.save(buffered, format="JPEG")
    img_str: str = base64.b64encode(buffered.getvalue())
    return img_str

  def __del__(self) -> None:
    pass