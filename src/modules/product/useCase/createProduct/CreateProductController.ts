import { Request, Response } from "express";
import { CreateProductUseCase } from "./CreateProductUseCase";

export class CreateProductController {
    async handle(request: Request, response: Response){
        const { 
            description,
            price , 
            discount,
            quantity,
            detail,
            condition,
            status,
            id_user } =request.body;
        
            const createProductUseCase = new CreateProductUseCase();

            const product = await createProductUseCase.execute({
                description,
                    price , 
                    discount,
                    quantity,
                    detail,
                    condition,
                    status,
                    id_user
            });

           // const image = await createProductUseCase.executeImage({    });


            return response.json(product);
    }
}