// some.controller.ts
import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('protected')
export class SomeController {
  @UseGuards(JwtAuthGuard)
  @Get()
  getProtectedData() {
    return 'This is a protected route.';
  }
}
