"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.routes = void 0;
var express_1 = require("express");
var multer_1 = __importDefault(require("multer"));
var upload_1 = __importDefault(require("./config/upload"));
var authenticateClientController_1 = require("./modules/account/authenticateClient/authenticateClientController");
var CreateClientController_1 = require("./modules/client/useCase/createClient/CreateClientController");
var CreateProductController_1 = require("./modules/product/useCase/createProduct/CreateProductController");
var UploadImageProductController_1 = require("./modules/product/useCase/uploadImageProdut/UploadImageProductController");
var routes = (0, express_1.Router)();
exports.routes = routes;
var authenticateClientController = new authenticateClientController_1.AuthenticateClientController();
var createClientController = new CreateClientController_1.CreateClientController();
var createProductController = new CreateProductController_1.CreateProductController();
var uploadImageProductController = new UploadImageProductController_1.UploadImageProductController();
var upload = (0, multer_1["default"])(upload_1["default"]);
routes.post("/product/image/:id_product", upload.array("file"), uploadImageProductController.handle);
routes.post("/client", createClientController.handle);
routes.post("/auth/client", authenticateClientController.handle);
routes.post("/product", createProductController.handle);
//# sourceMappingURL=routes.js.map