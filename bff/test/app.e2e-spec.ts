import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';

describe('ElementsController (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.setGlobalPrefix('api/v1');
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
      }),
    );
    await app.init();
  });

  afterEach(async () => {
    await app.close();
  });

  it('/api/v1/elements (GET)', () => {
    return request(app.getHttpServer())
      .get('/api/v1/elements')
      .expect(200)
      .expect((response) => {
        expect(response.body).toHaveLength(4);
        expect(response.body[0]).toMatchObject({
          id: 1,
          name: 'Sensor de temperatura',
          type: 'sensor',
          value: 23.5,
        });
      });
  });
});
