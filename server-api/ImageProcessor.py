from flask import request, Response, jsonify
from flask_restful import Resource
from Image import Image
from ImageVerifier import ImageVerifier

class ImageProcessor(Resource):
    """Processes RESTful HTTP requests for image processing"""

    def post(self) -> Response:
        """Handles image transformation requests
    
        :return: A JSON response containing the transformed image
        :return: An error response message w/ status 400 BAD REQUEST
        """

        # Extract JSON from POST request
        req: dict = request.get_json()

        # Check if image exists
        if 'image' not in req:
            return 'ERROR: No image provided', 400

        # Verify image
        imageVerifier: ImageVerifier = ImageVerifier()
        if not imageVerifier.is_verified_image(req['image']):
            return 'ERROR: Unsupported media type', 400

        # Create and transform image
        image: Image = Image(req['image'])
        image.transform(req['transformations'])
        transformedImage: str = image.get_image()

        # Generate image response
        return jsonify({'image': transformedImage})
