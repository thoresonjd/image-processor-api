"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ImageProcessor_1 = require("./ImageProcessor");
const app = new ImageProcessor_1.ImageProcessor().getApp();
const PORT = 2022;
app.listen(PORT, () => console.log(`ImageProcessor listening on port ${PORT}`));
