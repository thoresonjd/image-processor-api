from PIL import Image as PillowImage
from io import BytesIO
import base64

class Image:

  def __init__(self, image) -> None:
    self.image: PillowImage = self.__decode(image)

  def __decode(self, image) -> PillowImage:
    decodedImage = base64.b64decode(image)
    decodedImageBuffer = BytesIO(decodedImage)
    return PillowImage.open(decodedImageBuffer)

  def __encode(self) -> bytes:
    # TODO: Return as give input format, not just JPEG
    buffered = BytesIO()
    self.image.save(buffered, format="JPEG")
    return base64.b64encode(buffered.getvalue())

  def transform(self, transformations: list) -> None:
    # TODO: Account for all transformations
    self.image = self.image.transpose(PillowImage.FLIP_LEFT_RIGHT)

  def getTransformedImage(self) -> bytes:
    transformedImage: str = ''.join(map(chr, self.__encode())) 
    return transformedImage

  def __del__(self) -> None:
    pass