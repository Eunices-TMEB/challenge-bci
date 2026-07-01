import { Injectable } from '@nestjs/common';
import { ElementDto } from './dto/element.dto';

@Injectable()
export class ElementsService {
  private readonly elements: ElementDto[] = [
    { id: 1, name: 'Sensor de temperatura', type: 'sensor', value: 23.5 },
    { id: 2, name: 'Medidor de presión', type: 'sensor', value: 101.3 },
    { id: 3, name: 'Interruptor principal', type: 'switch', value: 0 },
  ];

  public findAll(): ElementDto[] {
    return this.elements;
  }
}
