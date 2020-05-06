import { Repository } from "typeorm";
import { Maratona } from "../maratona.entity";
export declare class MaratonaService {
    private maratonaRepository;
    constructor(maratonaRepository: Repository<Maratona>);
    findAll(): Promise<Maratona[]>;
    create(maratona: Maratona): Promise<Maratona>;
}
