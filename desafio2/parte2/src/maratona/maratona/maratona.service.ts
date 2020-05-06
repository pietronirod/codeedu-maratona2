import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from "typeorm"
import { Maratona } from "../maratona.entity"

@Injectable()
export class MaratonaService {
    constructor(
        @InjectRepository(Maratona)
        private maratonaRepository: Repository<Maratona>
    ) {}

    async findAll(): Promise<Maratona[]> {
        return await this.maratonaRepository.find();
    }

    async create(maratona: Maratona): Promise<Maratona> {
        return await this.maratonaRepository.save(maratona)
    }
}
