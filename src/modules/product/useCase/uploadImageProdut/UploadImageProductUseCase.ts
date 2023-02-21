import { prisma } from "../../../../database/prismaClient";

interface IUpload {
    id_product: string;
    name_image: string[];

}
export class UploadImageProductUseCase {
    async execute({ id_product, name_image}: IUpload) {
        console.log(id_product);
        
        name_image.map(async(name) =>{
           await prisma.image.create({
                data: {
                    id_product,
                    name,
                    
                }

            });
            
        });
        

        
    }
}