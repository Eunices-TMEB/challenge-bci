import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  public getRoot(): { message: string; endpoints: { elements: string } } {
    return {
      message: 'BFF NestJS running',
      endpoints: {
        elements: '/api/v1/elements',
      },
    };
  }
}
