import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 25 })
  @ApiProperty({ example: 'John Doe', description: 'Name of user', type: String })
  name: string;

  @Column({ length: 50 })
  @ApiProperty({ example: 'example@email.com', description: 'Email of user' })
  email: string;

  @Column({ default: true })
  @ApiProperty({ description: 'Enable user', default: true })
  isActive: boolean;
}
