namespace ImageProcessor.Transformations;

class TransformationFactory {

    public static ITransformation? getTransformation(string transformation) {
        return transformation switch {
            "flip-horizontal" => new FlipHorizontal(),
            "flip-vertical" => new FlipVertical(),
            _ => null
        };
    }
}