import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { userEntity } from './entities/entity';
import { userRepository } from './user.repository';

@Injectable()
export class userService {
  constructor(private readonly repository: userRepository) {}

  async create(dto: CreateUserDto): Promise<userEntity> {
    try {
      if(dto.password){
      if (dto.password !== dto.confirmPassword) {
        throw new Error('Senha invalida');
      }
    }
      delete dto.confirmPassword;

      const data: userEntity = {
        id: randomUUID(),
        ...dto
      };
      const newUser = await this.repository.create(data);
      if (!newUser) {
        throw new Error('Erro ao adicionar um novo usuário');
      }
      return newUser;
    } catch (err) {}
  }

  async findAll(): Promise<userEntity[]> {
    try {
      return await this.repository.findAll();
    } catch (err) {}
  }

  async findById(id: string): Promise<userEntity> {
    try {
      if (!id) {
        throw new Error(`O ID: ${id} não é válido`);
      }
      return await this.repository.findById(id);
    } catch (err) {}
  }

  async update(id: string, dto: UpdateUserDto): Promise<userEntity> {
    try {
      await this.findById(id);
      if(dto.password){
      if (dto.password !== dto.confirmPassword) {
        throw new Error('Senha invalida');
      }
      }
      delete dto.confirmPassword;

      const data: Partial<userEntity> = { ...dto};
      const updatedUser = await this.repository.update(id, data);
      if (!updatedUser) {
        throw new Error('Erro ao atualizar o usuário');
      }
      return updatedUser;
    } catch (err) {}
  }

  async delete(id: string): Promise<userEntity> {
    try {
      await this.findById(id);
      return await this.repository.delete(id);
    } catch (err) {}
  }
}
