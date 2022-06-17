namespace ImageProcessor.Transformations;

class TransformationBuilder {

    private List<ITransformation> transformations;

    public TransformationBuilder() {
        this.transformations = new List<ITransformation>();
    }

    public void buildTransformations(List<string> transformations) {
        foreach(string t in transformations) {
            ITransformation? transformation = TransformationFactory.getTransformation(t);
            if (transformation is not null)
                this.transformations.Add(transformation);
        }
    }

    public List<ITransformation> getTransformations() {
        return new List<ITransformation>(this.transformations);
    }
}