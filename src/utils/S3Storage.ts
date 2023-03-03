import  {S3}  from "@aws-sdk/client-s3";
import path from 'path';
import mime from 'mime';
import fs from 'fs'

import multerConfig from '../config/upload';

class S3Storage {
    private client: S3;

    constructor() {
        this.client = new S3({
            region: 'sa-east-1',
            credentials: {
                accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
                secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY_ID!,
              },/*
              endpoint: "http://localhost:3333/product/image",*/

        });

    }

    async saveFile(filename: string): Promise<void> {
        const originalPath = path.resolve(multerConfig.directory, filename);

        const ContentType = mime.getType(originalPath);

        if(!ContentType){
            throw new Error("File not Found");
        }

        const fileContent = await fs.promises.readFile(originalPath);

        this.client.putObject({
            Bucket: 'masterpro',
            Key: filename,
           
            Body: fileContent,
            ContentType,
        })
        
        

        await fs.promises.unlink(originalPath)
    }

    async deleteFile(filename: string): Promise<void> {
        await this.client
          .deleteObject({
            Bucket: 'aula-youtube',
            Key: filename,
          })
          
      }
}

export default S3Storage;