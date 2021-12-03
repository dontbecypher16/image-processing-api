"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//const sharp = require("sharp");
var sharp_1 = __importDefault(require("sharp"));
function imgFile(filename, width, height) {
    try {
        var transform = (0, sharp_1.default)("public/images/" + filename + ".jpg")
            .resize(width, height);
        transform
            .clone()
            .toFile("public/new-images/" + filename + ".jpg");
        return transform;
    }
    catch (err) {
        console.log("An error has occurred: " + err);
    }
}
exports.default = { imgFile: imgFile };
