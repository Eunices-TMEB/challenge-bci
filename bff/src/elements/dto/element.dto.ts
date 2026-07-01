import { IsNumber, IsString } from 'class-validator';

export class ElementDto {
  @IsNumber()
  id: number;

  @IsString()
  name: string;

  @IsString()
  type: string;

  @IsNumber()
  value: number;
}
