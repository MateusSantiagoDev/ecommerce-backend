import { Injectable } from '@nestjs/common';
import { userEntity } from './entities/entity';
import { userRepository } from './user.repository';

@Injectable()
export class userService {
  constructor(private readonly repository: userRepository) {}

  findAll(): Promise<userEntity[]> {
    return this.repository.findAll();
  }
}
