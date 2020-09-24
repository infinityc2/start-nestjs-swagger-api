import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 25 })
    name: string;
    
    @Column({ length: 50 })
    email: string;

    @Column({ default: true })
    isActive: boolean;

}
