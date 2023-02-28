import aws, { S3 } from 'aws-sdk';
import path from 'path';

import multerConfig from '../config/upload';

class S3Storage {
    private client: S3;

    constructor() {
        this.client = new aws.S3({
            region: 'us-east-1',
        });

    }

    async saveFile(filename: string): Promise<void> {
        const originalPath = path.resolve(multerConfig.directory, filename)
    }
}

export default S3Storage;