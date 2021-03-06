from Transformation import Transformation 
from TransformationFactory import TransformationFactory

class TransformationBuilder:
    """Builds a list of transformations to perform on an image"""

    def build_transformations(self, transformations: list) -> None:
        """Converts a JSON-esque list of transformations to Transformation objects
    
        :param transformations: A JSON-esque list of transformations
        :return: A heterogeneous list of Transformation objects
        """

        self.__transformations: list[Transformation] = [transformation for t in transformations if (transformation := TransformationFactory.get_transformation(t))]

    def get_transformations(self) -> list[Transformation]:
        """Retrieves a list of transformations
    
        :return: A heterogeneous list of Transformation objects
        """
    
        return self.__transformations
