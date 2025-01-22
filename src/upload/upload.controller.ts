import {
    Controller,
    Post,
    UseInterceptors, 
    UploadedFile,
  } from '@nestjs/common';
  import { FileInterceptor } from '@nestjs/platform-express';
  import { diskStorage } from 'multer';
  import { extname } from 'path';
  import { UploadService } from './upload.service';

  
  @Controller('upload')
  export class UploadController {
    constructor(
      private uploadservice: UploadService,
      // private readonly jwtService: JwtService,
  ) {}
    @Post('image')
    @UseInterceptors(
      FileInterceptor('image', {
        storage: diskStorage({
          destination: './uploads',
          filename: (req, file, cb) => {
            const randomName = Array(32)
              .fill(null)
              .map(() => Math.round(Math.random() * 16).toString(16))
              .join('');
            cb(null, `${randomName}${extname(file.originalname)}`);
          },
        }),
      }),
    )
    async uploadFile(@UploadedFile() file: Express.Multer.File) {
      let result = await this.uploadservice.addupload(file.filename)
      return {
        message: 'Image uploaded successfully!',
        imagePath: `uploads/${file.filename}`,
      };
    }
  }
  