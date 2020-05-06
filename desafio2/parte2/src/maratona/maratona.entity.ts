import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Maratona {
    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column()
    aula: String
}