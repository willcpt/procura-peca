import { Router } from "express";
import multer from "multer";
import uploadConfig from "./config/upload";
import { AuthenticateClientController } from "./modules/account/authenticateClient/authenticateClientController";
import { CreateClientController } from "./modules/client/useCase/createClient/CreateClientController";
import { CreateProductController } from "./modules/product/useCase/createProduct/CreateProductController";
import { UploadImageProductController } from "./modules/product/useCase/uploadImageProdut/UploadImageProductController";

const routes = Router();

const authenticateClientController = new AuthenticateClientController();
const createClientController = new CreateClientController();
const createProductController = new CreateProductController();
const uploadImageProductController = new UploadImageProductController();
const upload = multer(uploadConfig);


routes.post("/product/image/:id_product", upload.array("file"), uploadImageProductController.handle);
routes.post("/client", createClientController.handle);
routes.post("/auth/client", authenticateClientController.handle);
routes.post("/product", createProductController.handle);



export { routes }