import { Maratona } from "../maratona.entity";
import { MaratonaService } from "../maratona/maratona.service";
export declare class MaratonaController {
    private maratonaService;
    constructor(maratonaService: MaratonaService);
    index(): Promise<Maratona[]>;
    create(maratonaData: Maratona): Promise<any>;
}
