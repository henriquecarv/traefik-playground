import { Controller, Get } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('api/one/cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  findAll(): string {
    return this.catsService.findAll();
  }
}
