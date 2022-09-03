import { Controller, Get } from '@nestjs/common';

@Controller({ host: 'admin.example.com' })
export class AdminControllerController {
  @Get()
  index(): string {
    return 'Admin page';
  }
}
