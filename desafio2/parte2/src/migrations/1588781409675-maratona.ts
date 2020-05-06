import {MigrationInterface, QueryRunner, Table} from "typeorm";
import { identity } from "rxjs";

export class maratona1588781409675 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(new Table({
            name: 'maratona',
            columns: [
                {
                    name: 'id',
                    type: 'varchar',
                    isPrimary: true
                },
                {
                    name: 'aula',
                    type: 'varchar'
                }
            ]
        }), true)
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable('maratona')
    }

}
