"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable prefer-const */
var express_1 = __importDefault(require("express"));
var sharp_logic_1 = __importDefault(require("./sharp-logic"));
var apicache_1 = __importDefault(require("apicache"));
var app = (0, express_1.default)();
var port = 4000;
var cache = apicache_1.default.middleware;
app.use(express_1.default.static(__dirname + '/public/images'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(cache('5 minutes'));
app.get('/', function (req, res) {
    var _a;
    var width = Number(req.query.width);
    var height = Number(req.query.height);
    var filename = String(req.query.filename);
    res.type('image/jpeg');
    (_a = (0, sharp_logic_1.default)(filename, width, height)) === null || _a === void 0 ? void 0 : _a.pipe(res);
});
app.listen(port, function () {
    console.log("Server listening on localhost:" + port);
});
exports.default = app;
