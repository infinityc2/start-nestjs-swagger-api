import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User) 
        private readonly usersRepository: Repository<User>
    ) {}

    async findAll(): Promise<User[]> {
        return await this.usersRepository.find();
    }

    async findOne(id: number): Promise<User> {
        return await this.usersRepository.findOne(id);
    }

    async createUser(user: User): Promise<User> {
        return await this.usersRepository.save(user);
    }

    async updateUser(id: number, user: User): Promise<User> {
        const u = await this.usersRepository.findOne(id);
        u.name = user.name;
        u.email = user.email;
        u.isActive = user.isActive;
        return await this.usersRepository.save(u);
    }

    async deleteUser(id: number): Promise<void> {
        await this.usersRepository.delete(id);
    }

}
