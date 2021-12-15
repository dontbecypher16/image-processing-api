"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sharp_logic_1 = __importDefault(require("../../src/sharp-logic"));
describe("Testing image resizing", function () {
    it("gets proper data for query parameters", function () {
        var newFile = (0, sharp_logic_1.default)('santamonica.jpg', 400, 800);
        return newFile;
    });
});
