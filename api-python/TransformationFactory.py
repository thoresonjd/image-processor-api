from Transformation import *
import re

class TransformationFactory:
    """Converts transformation requests to Transformation objects"""

    @staticmethod
    def get_transformation(transformation) -> Transformation:
        """Retrieves the correct Transformation object for a transformation request
    
        :param transformation: A JSON-esque transformation request
        :return: A specific Transformation object
        """
        
        if transformation == 'flip-horizontal':
            return FlipHorizontal()
        elif transformation == 'flip-vertical':
            return FlipVertical()
        elif re.fullmatch('resize\(\d+,\d+\)', transformation):
            dimensions: list = transformation[7:-1].split(',')
            width: int = int(dimensions[0])
            height: int = int(dimensions[1])
            return Resize(width, height)
        elif re.fullmatch('rotate\(-?([0-9]*[.])?[0-9]+\)', transformation):
            degrees: int = int(transformation[7:-1])
            return Rotate(degrees)
        elif transformation == 'rotate-left':
            return RotateLeft()
        elif transformation == 'rotate-right':
            return RotateRight()
        elif transformation == 'thumbnail':
            return Thumbnail()
        elif transformation == 'grayscale':
            return Grayscale()
        elif re.fullmatch('grayscale-percentage\(-?([0-9]*[.])?[0-9]+\)', transformation):
            percentage: float = float(transformation[21:-1])
            return GrayscalePercentage(percentage)
        elif re.fullmatch('saturate\(-?([0-9]*[.])?[0-9]+\)', transformation):
            saturation: float = float(transformation[9:-1])
            return Saturate(saturation)
        