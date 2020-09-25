import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiBody, ApiTags, ApiCreatedResponse, ApiNoContentResponse } from '@nestjs/swagger';
import { UsersService } from '../../service/users/users.service';
import { User } from '../../entity/user.entity';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get(':id')
  @ApiOperation({ summary: 'Find user' })
  @ApiResponse({ status: 200, description: 'OK', type: User })
  async findOne(@Param() id: number): Promise<User> {
    return await this.usersService.findOne(id);
  }

  @Get()
  @ApiOperation({ summary: 'Find all users' })
  @ApiResponse({ status: 200, description: 'OK', type: [User] })
  async findAll(): Promise<User[]> {
    return await this.usersService.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'Create user' })
  @ApiCreatedResponse({ description: 'Created', type: User })
  @ApiBody({ type: User })
  async createUser(@Body() user: User): Promise<User> {
    return this.usersService.createUser(user);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Modified' })
  @ApiResponse({ description: 'User updated' })
  async updateUser(@Param() id: number, @Body() user: User): Promise<User> {
    return this.usersService.updateUser(id, user);
  }

  @Delete(':id')
  @ApiOperation({ description: 'Deleted' })
  @ApiNoContentResponse({ description: 'Delete user' })
  async deleteUser(@Param() id): Promise<void> {
    await this.usersService.deleteUser(id);
  }
}
