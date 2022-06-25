import { ImageProcessor } from './ImageProcessor';

const app: any = new ImageProcessor().getApp();
const PORT: number = 2022;
app.listen(PORT, () => console.log(`ImageProcessor listening on port ${PORT}`));