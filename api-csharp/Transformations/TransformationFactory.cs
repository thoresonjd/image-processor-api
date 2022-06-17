using System.Text.RegularExpressions;

namespace ImageProcessor.Transformations;

class TransformationFactory {

    public static ITransformation? getTransformation(string transformation) {
        switch (transformation) {
            case "flip-horizontal":
                return new FlipHorizontal();
            case "flip-vertical":
                return new FlipVertical();
            case string t when new Regex(@"resize\(\d+,\d+\)").IsMatch(t):
                int start = t.IndexOf('(');
                int end = t.IndexOf(')');
                string[] dimensions = t.Substring(start + 1, end - start - 1).Split(",");
                uint width = uint.Parse(dimensions[0]);
                uint height = uint.Parse(dimensions[1]);
                return new Resize(width, height);
            case string t when new Regex(@"rotate\(-?([0-9]*[.])?[0-9]+\)").IsMatch(t):
                start = t.IndexOf('(');
                end = t.IndexOf(')');
                int degrees = int.Parse(t.Substring(start + 1, end - start - 1));
                return new Rotate(degrees);
            case "rotate-left":
                return new RotateLeft();
            case "rotate-right":
                return new RotateRight();
            case "thumbnail":
                return new Thumbnail();
            default:
                return null;
        }
    }
}