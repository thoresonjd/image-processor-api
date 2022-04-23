from json import load

class ImageVerifier:
    """Verifies the Base64 images based on their MIME type"""

    def __init__(self) -> None:
        self.__mimeTypes: dict = load(open("MIMETypes.json"))

    def is_verified_image(self, image: str) -> bool:
        """Checks a Base64 image's MIME type for validity
    
        :param image: A Base64 string representation of an image
        :return: True if MIME type is supported, False otherwise
        """
    
        for mimeType in self.__mimeTypes.keys():
            if image[0:len(mimeType)] == mimeType:
                return True
        return False
