from abc import ABC, abstractmethod
from PIL import Image as PillowImage, ImageOps

class Transformation(ABC):
  
  @abstractmethod
  def transform(self, img: PillowImage) -> PillowImage:
    pass
