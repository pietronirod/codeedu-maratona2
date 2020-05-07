import { Module } from '@nestjs/common';
import { ServeStaticModule } from  '@nestjs/serve-static'
import { join } from 'path'
import { SenderController } from './sender.controller';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'assets')
    })
  ],
  controllers: [SenderController]
})
export class SenderModule {}
