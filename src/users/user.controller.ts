import { Controller } from '@nestjs/common';
import {
  Body,
  Post,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common/decorators';
import { ApiOperation } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { userEntity } from './entities/entity';
import { userService } from './user.service';

@Controller('users')
export class userController {
  constructor(private readonly service: userService) {}

  @ApiOperation({
    summary: 'Cadastrar um novo usuário',
  })
  @Post()
  async create(@Body() dto: CreateUserDto): Promise<userEntity> {
    try {
      return await this.service.create(dto);
    } catch (err) {}
  }

  @ApiOperation({
    summary: 'Buscar todos os usuários',
  })
  @Get()
  async findAll(): Promise<userEntity[]> {
    try {
      return await this.service.findAll();
    } catch (err) {}
  }

  @ApiOperation({
    summary: 'Buscar usuário pelo ID',
  })
  @Get(':id')
  findById(@Param('id') id: string): Promise<userEntity> {
    try {
      return this.service.findById(id);
    } catch (err) {}
  }

  @ApiOperation({
    summary: 'Atualizar um usuário pelo ID',
  })
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateUserDto,
  ): Promise<userEntity> {
    try {
      return await this.service.update(id, dto);
    } catch (err) {}
  }

  @ApiOperation({
    summary: 'Remove um usuário pelo ID',
  })
  @Delete(':id')
  delete(@Param('id') id: string): Promise<userEntity> {
    try {
      return this.service.delete(id);
    } catch (err) {}
  }
}
