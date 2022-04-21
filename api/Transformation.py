from abc import ABC, abstractmethod
from PIL import Image as PillowImage, ImageOps, ImageEnhance

class Transformation(ABC):
  
  @abstractmethod
  def transform(self, img: PillowImage) -> PillowImage:
    pass

class FlipHorizontal(Transformation):
  
  def transform(self, img: PillowImage) -> PillowImage:
    return img.transpose(PillowImage.FLIP_LEFT_RIGHT)

class FlipVertical(Transformation):

  def transform(self, img: PillowImage) -> PillowImage:
    return img.transpose(PillowImage.FLIP_TOP_BOTTOM)

class Resize(Transformation):

  def __init__(self, width: int, height: int) -> None:
    self.__width: int = width
    self.__height: int = height

  def transform(self, img: PillowImage) -> PillowImage:
    size: tuple = (self.__width, self.__height)
    return img.resize(size)

class Rotate(Transformation):
  
  def __init__(self, degress: float):
    self.__degrees: float = degress

  def transform(self, img: PillowImage) -> PillowImage:
    return img.rotate(self.__degrees)

class RotateLeft(Transformation):
  
  def transform(self, img: PillowImage) -> PillowImage:
    return img.transpose(PillowImage.ROTATE_90)

class RotateRight(Transformation):
  
  def transform(self, img: PillowImage) -> PillowImage:
    return img.transpose(PillowImage.ROTATE_270)

class Thumbnail(Transformation):
  
  def transform(self, img: PillowImage) -> PillowImage:
    image: PillowImage = img.copy()
    image.thumbnail((100,100))
    return image

class Grayscale(Transformation):

  def transform(self, img: PillowImage) -> PillowImage:
    return ImageOps.grayscale(img)

class Saturate(Transformation):

  def __init__(self, saturation: float) -> None:
      self.__saturation: float = saturation
  
  def transform(self, img: PillowImage) -> PillowImage:
      return ImageEnhance.Color(img).enhance(self.__saturation)
