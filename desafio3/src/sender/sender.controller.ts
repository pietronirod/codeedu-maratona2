import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express'
import { join } from 'path'

@Controller('sender')
export class SenderController {
    @Get()
    getSender(
        @Res() res: Response
    ){
        res.sendFile(join(__dirname, '..', '/assets/send.html'))

    }
}
