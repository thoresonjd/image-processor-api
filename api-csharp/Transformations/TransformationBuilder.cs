namespace ImageProcessor.Transformations;

/// <summary>
/// TransformationBuilder<br />
/// Builds a list of ITransformation commands
/// </summary>
class TransformationBuilder 
{
    private List<ITransformation> transformations;

    /// <summary>
    /// Constructor of the TransformationBuilder class<br />
    /// Initializes an empty list of ITransformation commands
    /// </summary>
    public TransformationBuilder() 
    {
        this.transformations = new List<ITransformation>();
    }

    /// <summary>
    /// Converts a list of transformation string requests to ITransformation commands
    /// </summary>
    /// <param name="transformations"></param>
    public void buildTransformations(List<string> transformations) 
    {
        foreach(string t in transformations) 
        {
            ITransformation? transformation = TransformationFactory.getTransformation(t);
            if (transformation is not null)
                this.transformations.Add(transformation);
        }
    }

    /// <summary>
    /// Retrieves a list of ITransformation commands
    /// </summary>
    /// <returns></returns>
    public List<ITransformation> getTransformations() 
    {
        return new List<ITransformation>(this.transformations);
    }
}