import express, { Application } from 'express';
import { ElementController } from './controllers/element.controller.js';
import { ElementService } from './services/element.service.js';

const app: Application = express();
const port: number = Number(process.env.PORT) || 3000;

const elementService = new ElementService();
const elementController = new ElementController(elementService);

app.use(express.json());

app.get('/api/v1/elements', elementController.getElements);

app.listen(port, (): void => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
