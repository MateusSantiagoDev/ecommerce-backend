import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateEmpresaDto } from './dto/create-empresas.dto';
import { UpdateEmpresaDto } from './dto/update-empresas.dto';
import { EmpresaRepository } from './empresa.repository';
import { EmpresasEntity } from './entities/entity';

@Injectable()
export class EmpresaService {
  constructor(private readonly repository: EmpresaRepository) {}

  async create(dto: CreateEmpresaDto): Promise<EmpresasEntity> {
    try {
      const data: EmpresasEntity = {
        id: randomUUID(),
        ...dto,
      };
      const newEmpresa = await this.repository.create(data);
      if (!newEmpresa) {
        throw new Error('Erro ao adicionar uma nova empresa');
      }
      return newEmpresa;
    } catch (err) {}
  }

  async findAll(): Promise<EmpresasEntity[]> {
    try {
      return await this.repository.findAll();
    } catch (err) {}
  }

  async findById(id: string): Promise<EmpresasEntity> {
    try {
      if (!id) {
        throw new Error(`O ID: ${id} não é válido`);
      }
      return await this.repository.findById(id);
    } catch (err) {}
  }

  async update(id: string, dto: UpdateEmpresaDto): Promise<EmpresasEntity> {
    try {
      await this.findById(id);
      const data: Partial<EmpresasEntity> = { ...dto };
      const updatedEmpresa = await this.repository.update(id, data);
      if (!updatedEmpresa) {
        throw new Error('Erro ao atualizar o empresa');
      }
      return updatedEmpresa;
    } catch (err) {}
  }

  async delete(id: string): Promise<EmpresasEntity> {
    try {
      await this.findById(id);
      return await this.repository.delete(id);
    } catch (err) {}
  }
}
