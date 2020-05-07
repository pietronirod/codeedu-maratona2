import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express'
import { join } from 'path'

@Controller('receiver')
export class ReceiverController {
    @Get()
    getReceiver(
        @Res() res: Response
    ){
        res.sendFile(join(__dirname, '..', '/assets/receive.html'))
    }
}
