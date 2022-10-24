import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/app/repository/user/user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  findAll() {
    return this.userRepository.findAll();
  }
}
