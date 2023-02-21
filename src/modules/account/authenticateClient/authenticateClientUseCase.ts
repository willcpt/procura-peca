import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

import { prisma } from "../../../database/prismaClient";

interface IAuthenticateClient{
    username: string;
    password: string;
}

export class AuthenticateClientUseCase {
    async execute({ username, password }: IAuthenticateClient) {
        //Verificar se username existe
        const client = await prisma.user.findFirst({
            where: {
                username
            }
        });

        if(!client){
            throw new Error("Usuário ou senha inválido!");
        }

        //Verificar se senha corresponde ao username
        const passwordMatch = await compare(password, client.password);

        if(!passwordMatch){
            throw new Error("Usuário ou senha inválido!");
        }

        //Gerar o token
        const token = sign({username}, "6fbc10faa450d8834cc8c7aeda4736c8", {
            subject: client.id,
            expiresIn: "1d"
        });
        
        return token;
    }
}