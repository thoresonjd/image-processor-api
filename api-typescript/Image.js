"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = void 0;
const sharp_1 = __importDefault(require("sharp"));
const TransformationBuilder_1 = require("./Transformations/TransformationBuilder");
class Image {
    constructor(image) {
        this.image = this.decode(image);
    }
    decode(image) {
        return (0, sharp_1.default)(Buffer.from(image, 'base64'));
    }
    encode() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.image.toBuffer().then(result => result.toString('base64'));
        });
    }
    transform(transformations) {
        let transformationBuilder = new TransformationBuilder_1.TransformationBuilder();
        transformationBuilder.buildTransformations(transformations);
        let tfs = transformationBuilder.getTransformations();
        tfs.forEach(t => this.image = t.transform(this.image));
    }
    getImage() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.encode();
        });
    }
}
exports.Image = Image;
