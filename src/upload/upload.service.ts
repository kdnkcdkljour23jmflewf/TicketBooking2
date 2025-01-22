import { Injectable } from '@nestjs/common';
import { Upload } from './upload.entity';
import { InjectRepository } from '@nestjs/typeorm'; // Ensure this import
import { Repository } from 'typeorm';

@Injectable()
export class UploadService {
    constructor(
        @InjectRepository(Upload) // Inject the repository for the Movie entity
        private uploadRepository: Repository<Upload>,
      ) {}

      async addupload(uploadname:string):Promise<Upload>{
        const upload = new Upload()
        upload.upload_name = uploadname
        upload.time = new Date()
        return this.uploadRepository.save(upload)
      }
}
