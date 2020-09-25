import { PrimaryGeneratedColumn, Column, Entity, BaseEntity } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 25 })
  @ApiProperty({ example: 'John Doe', description: 'Name of user', type: String })
  name: string;

  @Column({ length: 50 })
  @IsEmail()
  @ApiProperty({ example: 'example@email.com', description: 'Email of user' })
  email: string;

  @Column({ default: true })
  @ApiProperty({ description: 'Enable user', default: true })
  isActive: boolean;
}
