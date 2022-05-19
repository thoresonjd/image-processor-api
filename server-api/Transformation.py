from abc import ABC, abstractmethod
from PIL import Image as PillowImage, ImageOps, ImageEnhance

class Transformation(ABC):
    """Base Transformation object"""

    @abstractmethod
    def transform(self, image: PillowImage) -> PillowImage:
        """Performs a transformation on an image"""

        pass

class FlipHorizontal(Transformation):
    """Horizontal flip transformation"""

    def transform(self, image: PillowImage) -> PillowImage:
        """Performs a horizontal flip on an image
    
        :param image: An image object
        :return: A horizontally flipped image object
        """

        return image.transpose(PillowImage.FLIP_LEFT_RIGHT)

class FlipVertical(Transformation):
    """Vertical flip transformation"""

    def transform(self, image: PillowImage) -> PillowImage:
        """Performs a vertical flip on an image
    
        :param image: An image object
        :return: A vertically flipped image object
        """

        return image.transpose(PillowImage.FLIP_TOP_BOTTOM)

class Resize(Transformation):
    """Resize transformation"""

    def __init__(self, width: int, height: int) -> None:
        """Sets the dimensions for the Resize transformation
    
        :param width: The desired image width
        :param height: The desired image heigh
        """
    
        self.__width: int = width
        self.__height: int = height

    def transform(self, image: PillowImage) -> PillowImage:
        """Resizes an image
    
        :param image: An image object
        :return: A resized image object
        """

        size: tuple = (self.__width, self.__height)
        return image.resize(size)

class Rotate(Transformation):
    """Rotate transformation"""

    def __init__(self, degress: float):
        """Sets the degree of rotation for the Rotate transformation
    
        :param degrees: The degree of rotation
        """
    
        self.__degrees: float = degress

    def transform(self, image: PillowImage) -> PillowImage:
        """Rotates an image
    
        :param image: An image object
        :return: A rotated image object
        """

        return image.rotate(self.__degrees)

class RotateLeft(Transformation):
    """Left rotate transformation"""

    def transform(self, image: PillowImage) -> PillowImage:
        """Performs a 90 degree left rotation on an image
    
        :param image: An image object
        :return: A left rotated image object
        """
    
        return image.transpose(PillowImage.ROTATE_90)

class RotateRight(Transformation):
    """Right rotate transformation"""

    def transform(self, image: PillowImage) -> PillowImage:
        """Perform a 90 degree right rotation on an image
    
        :param image: An image object
        :return: A right rotated image object
        """

        return image.transpose(PillowImage.ROTATE_270)

class Thumbnail(Transformation):
    """Thumbnnail transformation"""

    def transform(self, image: PillowImage) -> PillowImage:
        """Generates a thumbnail of an image
    
        :param image: An image object
        :return: A thumbnail transformation of an image object
        """
    
        img: PillowImage = image.copy()
        img.thumbnail((100,100))
        return img

class Grayscale(Transformation):
    """Grayscale transformation"""

    def transform(self, image: PillowImage) -> PillowImage:
        """Converts an image to grayscale
    
        :param image: An image object
        :return: A grayscaled version of an image object
        """
    
        return ImageOps.grayscale(image)

class GrayscalePercentage(Transformation):
    """Grayscale percentage transformation"""

    def __init__(self, percentage: int) -> None:
        """Sets the percentage value for the GrayscalePercentage transformation"""

        self.__percentage: int = percentage

    def transform(self, image: PillowImage) -> PillowImage:
        """Converts an image to a specified grayscale percentage
    
        :param image: An image object
        :return: A specified grayscaled version of an image object
        """

        width, height = image.size
        grayscaled = PillowImage.new('L', (width, height))

        for x in range(width):
            for y in range(height):
                r, g, b = image.getpixel((x, y))
                value = self.__percentage * (r + g + b)
                value = int(value)
                grayscaled.putpixel((x, y), value)
        
        return grayscaled.convert('RGB')

class Saturate(Transformation):
    """Saturate transformation"""

    def __init__(self, saturation: float) -> None:
        """Sets the saturation value for the Saturate transformation
    
        :param saturation: A saturation value
        """
    
        self.__saturation: float = saturation
  
    def transform(self, image: PillowImage) -> PillowImage:
        """Saturates an image object
    
        :param image: An image object
        :return: A saturated/desaturated image object
        """
    
        return ImageEnhance.Color(image).enhance(self.__saturation)
