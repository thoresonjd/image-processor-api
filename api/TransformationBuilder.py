from Transformation import * 

class TransformationBuilder:

  def __init__(self) -> None:
    self.__transformations: list[Transformation] = []

  def build(self, transformations: list) -> None:
    pass

  def getTransformations(self) -> list[Transformation]:
    return self.__transformations
