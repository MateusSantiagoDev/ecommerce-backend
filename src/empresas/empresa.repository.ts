import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { EmpresasEntity } from './entities/entity';

@Injectable()
export class EmpresaRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: EmpresasEntity): Promise<EmpresasEntity> {
    return await this.prisma.empresa.create({ data });
  }

  async findAll(): Promise<EmpresasEntity[]> {
    return await this.prisma.empresa.findMany();
  }

  async findById(id: string): Promise<EmpresasEntity> {
    return await this.prisma.empresa.findUniqueOrThrow({ where: { id } });
  }

  async update(
    id: string,
    data: Partial<EmpresasEntity>,
  ): Promise<EmpresasEntity> {
    return await this.prisma.empresa.update({ where: { id }, data });
  }

  async delete(id: string): Promise<EmpresasEntity> {
    return await this.prisma.empresa.delete({ where: { id } });
  }
}
