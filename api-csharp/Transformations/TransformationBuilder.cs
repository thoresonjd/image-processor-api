namespace ImageProcessor.Transformations;

class TransformationBuilder {

    private List<ITransformation> transformations;

    public TransformationBuilder() {
        this.transformations = new List<ITransformation>();
    }

    public void buildTransformations(List<string> transformations) {
        foreach(string transformation in transformations)
            this.transformations.Add(TransformationFactory.getTransformation(transformation));
    }

    public List<ITransformation> getTransformations() {
        return this.transformations;
    }
}