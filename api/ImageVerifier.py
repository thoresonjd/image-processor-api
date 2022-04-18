from json import load

class ImageVerifier:

  def __init__(self) -> None:
    self.__mimeTypes: dict = load(open("MIMETypes.json"))

  def isVerifiedImage(self, image: str) -> bool:
    for mimeType in self.__mimeTypes.keys():
      if image[0:len(mimeType)] == mimeType:
        return True
    return False
