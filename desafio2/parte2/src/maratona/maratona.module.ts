import { Module } from '@nestjs/common';
import { MaratonaService } from './maratona/maratona.service';
import { MaratonaController } from './maratona/maratona.controller';
import { Maratona } from "./maratona.entity"
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Maratona]),
  ],
  providers: [MaratonaService],
  controllers: [MaratonaController]
})
export class MaratonaModule {}
