import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { userEntity } from './entities/entity';

@Injectable()
export class userRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: userEntity): Promise<userEntity> {
    return await this.prisma.user.create({ data });
  }

  async findAll(): Promise<userEntity[]> {
    return await this.prisma.user.findMany();
  }

  async findById(id: string): Promise<userEntity> {
    return await this.prisma.user.findUniqueOrThrow({ where: { id } });
  }

  async update(id:string, data: Partial<userEntity>): Promise<userEntity> {
    return await this.prisma.user.update({ where: { id }, data });
  }

  async delete(id: string): Promise<userEntity> {
    return await this.prisma.user.delete({ where: { id } });
  }
}
