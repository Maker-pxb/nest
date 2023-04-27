import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CountryController } from './country.controller';
import { AppService } from './app.service';
import { CountryService } from './country.service';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';
@Module({
  imports: [],
  controllers: [AppController, CountryController, CatsController],
  providers: [AppService, CountryService, CatsService],
})
export class AppModule {}
