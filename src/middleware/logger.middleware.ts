import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Middleware Log: Request received');
    console.log('Method:', req.method);
    console.log('URL:', req.originalUrl);
    return res.redirect(302, '/movies/another-endpoint');

    /* return res.status(400).json({
        success: false,
        message: 'Title is required in the request body',
      }); */
    next(); // Pass control to the next middleware or controller
  }
}
