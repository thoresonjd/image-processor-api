import MIMETypes from './MIMETypes.json';

class ImageVerifier {

    private supportedTypes: Record<string, string>;

    constructor() {
        this.supportedTypes = MIMETypes;
    }

    public hasImage(image: string | undefined): boolean {
        return !!image || typeof image !== 'undefined';
    }

    public isSupportedImage(image: string): boolean {
        for (let mimeType in this.supportedTypes)
            if (image.startsWith(mimeType))
                return true;
        return false;
    }
}

export { ImageVerifier }