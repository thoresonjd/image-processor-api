from Transformation import Transformation 
from TransformationFactory import TransformationFactory

class TransformationBuilder:
    """Builds a list of transformations to perform on an image"""

    def __init__(self) -> None:
        self.__transformations: list[Transformation] = []

    def build(self, transformations: list) -> None:
        """Converts a JSON-esque list of transformations to Transformation objects
    
        :param transformations: A JSON-esque list of transformations
        :return: A heterogeneous list of Transformation objects
        """

        tf: TransformationFactory = TransformationFactory()
        for t in transformations:
            self.__transformations.append(tf.get_transformation(t))
      

    def get_transformations(self) -> list[Transformation]:
        """Retrieves a list of transformations
    
        :return: A heterogeneous list of Transformation objects
        """
    
        return self.__transformations