"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sharp_1 = __importDefault(require("sharp"));
var path_1 = __importDefault(require("path"));
function imgFile(filename, width, height) {
    try {
        var publicPath = path_1.default.join(process.cwd(), 'public', 'images', "" + filename);
        var newPublicPath = path_1.default.join(process.cwd(), 'public', 'new-images', "" + filename);
        console.log(publicPath);
        var transform = (0, sharp_1.default)(publicPath).resize(width, height);
        transform.clone().toFile(newPublicPath);
        return transform;
    }
    catch (err) {
        console.log("An error has occurred: " + err);
    }
}
exports.default = imgFile;
