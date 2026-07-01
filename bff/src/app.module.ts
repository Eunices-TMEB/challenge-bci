import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ElementsModule } from './elements/elements.module';

@Module({
  imports: [ElementsModule],
  controllers: [AppController],
})
export class AppModule {}
