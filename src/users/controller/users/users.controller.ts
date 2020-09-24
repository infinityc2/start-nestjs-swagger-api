import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { UsersService } from 'src/users/service/users/users.service';
import { User } from 'src/users/entity/user.entity';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {}

    @Get(':id')
    async findOne(@Param() id: number): Promise<User> {
        return await this.usersService.findOne(id);
    }

    @Get()
    async findAll(): Promise<User[]> {
        return await this.usersService.findAll();
    }

    @Post()
    async createUser(@Body() user: User): Promise<User> {
        return this.usersService.createUser(user);
    }

    @Put(':id')
    async updateUser(@Param() id: number, @Body() user: User): Promise<User> {
        return this.usersService.updateUser(id, user);
    }

    @Delete(':id')
    async deleteUser(@Param() id): Promise<void> {
        await this.usersService.deleteUser(id);
    }
}
