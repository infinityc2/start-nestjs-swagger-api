import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { UsersRepository } from '../../repository/users.repository';

describe('UsersService', () => {
  let usersService: UsersService;
  let usersRepository: UsersRepository;
  const mockUsersRepository = () => ({
    find: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  });

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: UsersRepository,
          useFactory: mockUsersRepository,
        }
      ],
    }).compile();

    usersService = await module.get<UsersService>(UsersService);
    usersRepository = await module.get<UsersRepository>(UsersRepository);
  });

  it('should be nothing', () => {
    expect(null).toBe(null);
  })
});
