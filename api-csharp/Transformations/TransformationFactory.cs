namespace ImageProcessor.Transformations;

class TransformationFactory {

    public static ITransformation getTransformation(string transformation) {
        return new FlipHorizontal();
    }
}