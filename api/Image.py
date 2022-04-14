from PIL import Image as PillowImage
from io import BytesIO
import base64

class Image:

  def __init__(self, image: any) -> None:
    self.image: PillowImage = self.__decode(image)

  def __decode(self, image: any) -> PillowImage:
    decodedImage = base64.b64decode(image)
    decodedImageBuffer = BytesIO(decodedImage)
    return PillowImage.open(decodedImageBuffer)

  def __encode(self) -> bytes:
    buffered = BytesIO()
    self.image.save(buffered, format="JPEG")
    return base64.b64encode(buffered.getvalue())

  def transform(self, transformations: list) -> None:
    self.image = self.image.transpose(PillowImage.FLIP_LEFT_RIGHT)

  def getTransformedImage(self) -> bytes:
    return self.__encode()

  def __del__(self) -> None:
    pass