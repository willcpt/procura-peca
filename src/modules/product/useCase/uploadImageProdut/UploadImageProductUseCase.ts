import { prisma } from "../../../../database/prismaClient";
import S3Storage from "../../../../utils/S3Storage";



interface IUpload {
    id_product: string;
    name_image: string[];

}
export class UploadImageProductUseCase {
    async execute({ id_product, name_image}: IUpload) {
        
        const s3Storage = new S3Storage();

        
        
        name_image.map(async(name) =>{
           await s3Storage.saveFile(name);
           await prisma.image.create({
                data: {
                    id_product,
                    name,
                    
                }

            });
            
        });
        

        
    }
}