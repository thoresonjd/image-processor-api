from PIL import Image as PillowImage
from io import BytesIO
from Transformation import Transformation
from TransformationBuilder import TransformationBuilder
import base64

class Image:
  """Allows Base64 image manipulation"""

  def __init__(self, image) -> None:
    self.__image: PillowImage = self.__decode(image)

  def __decode(self, image) -> PillowImage:
    """Converts a Base64 string representation of an image to a PIL Image
    
    :param image: Base64 string representation of an image
    :return: A PIL Image object
    """

    decodedImage: bytes = base64.b64decode(image)
    decodedImageBuffer: BytesIO = BytesIO(decodedImage)
    return PillowImage.open(decodedImageBuffer)

  def __encode(self) -> str:
    """Converts an image object to a Base64 string representation of an image
    
    :return: A Base64 image representation
    """

    # TODO: Return as given input format, not just JPEG
    buffered: BytesIO = BytesIO()
    self.__image.save(buffered, format="JPEG")
    encodedImage: bytes = base64.b64encode(buffered.getvalue())
    return ''.join(map(chr, encodedImage)) 

  def transform(self, transformations: list) -> None:
    """Performs transformations on an image
    
    :param transformations: A list of transformations
    """

    tb: TransformationBuilder = TransformationBuilder()
    tb.build(transformations)
    tfs: list[Transformation] = tb.getTransformations()
    for t in tfs:
      self.__image = t.transform(self.__image)

  def getTransformedImage(self) -> str:
    """Retrieves a Base64 string representation of an image
    
    :return: Base64 string representation of an image
    """

    return self.__encode()
