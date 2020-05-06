import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MaratonaModule } from './maratona/maratona.module';

@Module({
  imports: [
    MaratonaModule,
    TypeOrmModule.forRoot({
      type: 'sqlite', //process.env.TYPEORM_CONNECTION,
      database: 'database.sqlite', //process.env.TYPEORM_DATABASE,
      entities: [__dirname + '/**/*.entity{.ts,.js}'], //process.env.TYPEORM_ENTITIES
      synchronize: true,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
