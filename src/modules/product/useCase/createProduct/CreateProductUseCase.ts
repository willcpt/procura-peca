import { prisma } from "../../../../database/prismaClient";
import { IProduct } from "../../dto/IProduct";

export class CreateProductUseCase {
    

    async execute({ description,
                    price , 
                    discount,
                    quantity,
                    detail,
                    condition,
                    status,
                    id_user }: IProduct){
        const product = await prisma.product.create({
            data: {
                description,
                price , 
                discount,
                quantity,
                detail,
                condition,
                status,
                id_user 
            }
        });

           console.log(product.id);
            return product;
    }

    
}