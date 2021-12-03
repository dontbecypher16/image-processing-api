"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var sharp_logic_1 = __importDefault(require("./sharp-logic"));
var app = (0, express_1.default)();
var port = 3000;
app.use(express_1.default.static(__dirname + '/public/images'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.get('/', function (req, res) {
    var _a;
    var width = req.query.width;
    var height = req.query.height;
    var filename = req.query.filename;
    // let width
    // let height
    // if (widthStr) {
    //   width = widthStr 
    // }
    // if (heightStr) {
    //   height = heightStr 
    // }
    if (typeof filename === "undefined" || typeof width === "undefined" || typeof height === "undefined") {
        throw new Error("imgFile parameter is undefined");
    }
    res.type('image/jpeg');
    (_a = sharp_logic_1.default.imgFile(filename, width, height)) === null || _a === void 0 ? void 0 : _a.pipe(res);
    //imgFile(filename, width, height).pipe(res) 
    //console.log(imgFile)
});
app.listen(port, function () {
    console.log("Server listening on localhost:" + port);
});
