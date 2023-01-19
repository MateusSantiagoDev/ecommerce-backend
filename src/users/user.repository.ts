import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { userEntity } from './entities/entity';

@Injectable()
export class userRepository {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<userEntity[]> {
    return this.prisma.user.findMany();
  }
}
