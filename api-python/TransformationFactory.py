from Transformation import *

class TransformationFactory:
    """Converts transformation requests to Transformation objects"""

    @staticmethod
    def get_transformation(transformation) -> Transformation:
        """Retrieves the correct Transformation object for a transformation request
    
        :param transformation: A JSON-esque transformation request
        :return: A specific Transformation object
        """
    
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
            case {'grayscale-%': int}:
                return GrayscalePercentage(transformation['grayscale-%'])
            case {'saturate': float}:
                return Saturate(transformation['saturate'])
        