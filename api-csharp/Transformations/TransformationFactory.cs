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
        }

        return null;
    }
}