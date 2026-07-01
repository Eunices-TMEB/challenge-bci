import { Element } from '../interfaces/element.interface.js';

export class ElementService {
  public getElements(): Element[] {
    return [
      { id: 1, name: 'Sensor de temperatura', type: 'sensor', value: 23.5 },
      { id: 2, name: 'Actuador de válvula', type: 'actuator', value: 1 },
      { id: 3, name: 'Medidor de presión', type: 'sensor', value: 101.3 },
      { id: 4, name: 'Interruptor principal', type: 'switch', value: 0 },
    ];
  }
}
