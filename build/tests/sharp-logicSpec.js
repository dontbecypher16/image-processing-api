"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sharp_logic_1 = __importDefault(require("../sharp-logic"));
describe("Testing image resizing", function () {
    it("gets proper data from endpoint", function () {
        var data = sharp_logic_1.default;
        expect(data).toEqual({
            filename: 'palmtunnel',
            width: 500,
            height: 700,
        });
        //expect(1).toBe(1)
    });
});
