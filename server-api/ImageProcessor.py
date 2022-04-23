from flask import request, Response, jsonify
from flask_restful import Resource
from Image import Image
from ImageVerifier import ImageVerifier

class ImageProcessor(Resource):
    """Processes RESTful requests for image processing"""

    def post(self) -> Response:
        """Handles image transformation requests
    
        :return: A JSON response containing the transformed image
        """

        # Extract JSON from POST request
        req: dict = request.get_json()

        # Verify image
        imageVerifier: ImageVerifier = ImageVerifier()
        if not imageVerifier.is_verified_image(req['image']):
            return 'ERROR: Not a valid image', 400

        # Create and transform image
        image: Image = Image(req['image'])
        image.transform(req['transformations'])
        transformedImage: str = image.get_transformed_image()

        # Generate image response
        res: Response = jsonify({'image': transformedImage})
        return res
