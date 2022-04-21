from Transformation import * 

class TransformationBuilder:
  """Builds a list of transformations to perform on an image"""

  def __init__(self) -> None:
    self.__transformations: list[Transformation] = []

  def build(self, transformations: list) -> None:
    """Converts a JSON-esque list of transformations to Transformation objects
    
    :param transformations: A JSON-esque list of transformations
    :return: A heterogeneous list of Transformation objects
    """

    for t in transformations:
      match t:
        case 'flip-horizontal':
          self.__transformations.append(FlipHorizontal())
        case 'flip-vertical':
          self.__transformations.append(FlipVertical())
        case {'resize': list}:
          width: int = t['resize'][0]
          height: int = t['resize'][1]
          self.__transformations.append(Resize(width, height))
        case {'rotate': float}:
          self.__transformations.append(Rotate(t['rotate']))
        case 'rotate-left':
          self.__transformations.append(RotateLeft())
        case 'rotate-right':
          self.__transformations.append(RotateRight())
        case 'thumbnail':
          self.__transformations.append(Thumbnail())
        case 'grayscale':
          self.__transformations.append(Grayscale())
        case {'saturate': float}:
          self.__transformations.append(Saturate(t['saturate']))

  def getTransformations(self) -> list[Transformation]:
    """Retrieves a list of transformations
    
    :return: A heterogeneous list of Transformation objects
    """
    
    return self.__transformations
