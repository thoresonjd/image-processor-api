from PIL import Image as PillowImage
from io import BytesIO
import base64

class Image:
  """Allows Base64 image manipulation"""

  def __init__(self, image) -> None:
    self.image: PillowImage = self.__decode(image)

  def __decode(self, image) -> PillowImage:
    """Converts a Base64 string representation of an image to a Pillow Image
    
    :param image: Base64 string representation of an image
    :return: A Pillow Image object
    """

    decodedImage = base64.b64decode(image)
    decodedImageBuffer = BytesIO(decodedImage)
    return PillowImage.open(decodedImageBuffer)

  def __encode(self) -> bytes:
    """Converts a Pillow Image object to a Base64 representation of an image
    
    :return: A Base64 image representation
    """

    # TODO: Return as give input format, not just JPEG
    buffered = BytesIO()
    self.image.save(buffered, format="JPEG")
    return base64.b64encode(buffered.getvalue())

  def transform(self, transformations: list) -> None:
    """Performs transformations on an image
    
    :param transformations: A list of transformations
    """

    # TODO: Account for all transformations
    self.image = self.image.transpose(PillowImage.FLIP_LEFT_RIGHT)

  def getTransformedImage(self) -> str:
    """Retrieves a Base64 string representation of an image
    
    :return: Base64 string representation of an image
    """

    transformedImage: str = ''.join(map(chr, self.__encode())) 
    return transformedImage

  def __del__(self) -> None:
    pass