from Transformation import *

class TransformationFactory:

  def getTransformation(self, transformation):
    match transformation:
      case 'flip-horizontal':
        return FlipHorizontal()
      case 'flip-vertical':
        return FlipVertical()
      case {'resize': list}:
        width: int = transformation['resize'][0]
        height: int = transformation['resize'][1]
        return Resize(width, height)
      case {'rotate': float}:
        return Rotate(transformation['rotate'])
      case 'rotate-left':
        return RotateLeft()
      case 'rotate-right':
        return RotateRight()
      case 'thumbnail':
        return Thumbnail()
      case 'grayscale':
        return Grayscale()
      case {'saturate': float}:
        return Saturate(transformation['saturate'])