from Transformation import Transformation
from TransformationBuilder import TransformationBuilder
from base64 import b64encode, b64decode
from PIL import Image as PillowImage
from io import BytesIO
from json import load

class Image:
    """Allows Base64 image manipulation"""

    def __init__(self, image: str) -> None:
        self.__image: PillowImage = self.__decode(image)
        self.__image = self.__image.convert(mode='RGB')
        self.__extension: str = self.__get_extension(image)

    def __get_extension(self, image: str) -> str:
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

        decodedImage: bytes = b64decode(image)
        decodedImageBuffer: BytesIO = BytesIO(decodedImage)
        return PillowImage.open(decodedImageBuffer)

    def __encode(self) -> str:
        """Converts an image object to a Base64 string representation of an image
    
        :return: A Base64 image representation
        """

        buffered: BytesIO = BytesIO()
        self.__image.save(buffered, format=self.__extension)
        encodedImage: bytes = b64encode(buffered.getvalue())
        return ''.join(map(chr, encodedImage)) 

    def transform(self, transformations: list) -> None:
        """Performs transformations on an image

        :param transformations: A list of transformations
        """

        print(self.__image.mode)

        tb: TransformationBuilder = TransformationBuilder()
        tb.build_transformations(transformations)
        tfs: list[Transformation] = tb.get_transformations()
        for t in tfs:
            self.__image = t.transform(self.__image)

    def get_image(self) -> str:
        """Retrieves a Base64 string representation of an image
    
        :return: Base64 string representation of an image
        """

        return self.__encode()
