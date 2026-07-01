import { Request, Response } from 'express';
import { ElementService } from '../services/element.service.js';

export class ElementController {
  private readonly elementService: ElementService;

  constructor(elementService: ElementService) {
    this.elementService = elementService;
  }

  public getElements = (_req: Request, res: Response): void => {
    const elements = this.elementService.getElements();
    res.status(200).json(elements);
  };
}
