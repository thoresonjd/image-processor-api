using System.Text.RegularExpressions;

namespace ImageProcessor.Transformations;

/// <summary>
/// TransformationFactory<br />
/// Converts transformation string requests to ITransformation commands
/// </summary>
class TransformationFactory 
{
    /// <summary>
    /// Converts a transformation string request to an ITransformation command
    /// </summary>
    /// <param name="transformation"></param>
    /// <returns>An ITransformation command if matched, null otherwise</returns>
    public static ITransformation? getTransformation(string transformation) 
    {
        switch (transformation) 
        {
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
            case "grayscale":
                return new Grayscale();
            case string t when new Regex(@"grayscale-percentage\(-?([0-9]*[.])?[0-9]+\)").IsMatch(t):
                start = t.IndexOf('(');
                end = t.IndexOf(')');
                float percentage = float.Parse(t.Substring(start + 1, end - start - 1));
                return new GrayscalePercentage(percentage);
            case string t when new Regex(@"saturate\(-?([0-9]*[.])?[0-9]+\)").IsMatch(t):
                start = t.IndexOf('(');
                end = t.IndexOf(')');
                float saturation = float.Parse(t.Substring(start + 1, end - start - 1));
                return new Saturate(saturation);
            default:
                return null;
        }
    }
}