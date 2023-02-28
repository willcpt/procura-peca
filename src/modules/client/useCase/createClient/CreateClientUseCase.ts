import { hash } from "bcrypt";
import { prisma } from "../../../../database/prismaClient";


interface ICreateClient{
    name: string;
    email: string;
    username: string;
    password: string;
}
export class CreateClientUseCase {
   async execute({ name, email, username, password}: ICreateClient){
    //Validar se o usuario existe
    const clientExist = await prisma.user.findFirst({
        where: {
            username
        }
    });

    if(clientExist){
        throw new Error("Cliente já existe!");
    }

    //criptografar a senha
    const hashPassword = await hash(password, 10);

    //Salvar o cliente
    const client = await prisma.user.create({
        data: {
            name,
            email,
            username,
            password: hashPassword,
        },
    });

    return client;
   }
    
}