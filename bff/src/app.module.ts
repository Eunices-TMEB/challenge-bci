import { Module } from '@nestjs/common';
import { ElementsModule } from './elements/elements.module';

@Module({
  imports: [ElementsModule],
})
export class AppModule {}
