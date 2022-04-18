from distutils import extension
from PIL import Image as PillowImage
from io import BytesIO
from Transformation import Transformation
from TransformationBuilder import TransformationBuilder
from json import load
import base64

class Image:
  """Allows Base64 image manipulation"""

  def __init__(self, image: str) -> None:
    self.__image: PillowImage = self.__decode(image)
    self.__extension: str = self.__getExtension(image)

  def __getExtension(self, image: str) -> str:
    """Extracts the extension from the Base64 image
    
    :param image: Base64 string representation of an image
    :return: The image's extension
    """

    mimeTypes: dict = load(open("MIMETypes.json"))
    for mimeType in mimeTypes.keys():
      if image[0:len(mimeType)] == mimeType:
        return mimeTypes[mimeType]
    return "JPEG"

  def __decode(self, image: str) -> PillowImage:
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
    self.__image.save(buffered, format=self.__extension)
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
