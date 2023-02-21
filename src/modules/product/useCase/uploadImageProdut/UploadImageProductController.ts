import { Request, Response } from "express";
import { UploadImageProductUseCase } from "./UploadImageProductUseCase";

interface IFiles {
    filename: string;
}

export class UploadImageProductController {
    async handle(request: Request, response: Response){
        
        const  images = request.files as IFiles[];
        const { id_product } = request.params;
        

        const uploadImageProductUseCase = new UploadImageProductUseCase();

        const name_image = images?.map((file) => file.filename);

        const image = await uploadImageProductUseCase.execute({
            id_product,
            name_image
        });

        return response.status(201).send();
    }
}