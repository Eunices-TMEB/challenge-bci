import { Controller, Get } from '@nestjs/common';
import { ElementDto } from './dto/element.dto';
import { ElementsService } from './elements.service';

@Controller('elements')
export class ElementsController {
  constructor(private readonly elementsService: ElementsService) {}

  @Get()
  public findAll(): ElementDto[] {
    return this.elementsService.findAll();
  }
}
