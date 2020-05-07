import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static'
import { join } from 'path'
import { ReceiverController } from './receiver.controller';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'assets')
    })
  ],
  controllers: [ReceiverController]
})
export class ReceiverModule {}
