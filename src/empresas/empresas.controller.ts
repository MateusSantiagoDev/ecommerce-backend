import { Controller } from '@nestjs/common';
import {
  Body,
  Post,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common/decorators';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateEmpresaDto } from './dto/create-empresas.dto';
import { UpdateEmpresaDto } from './dto/update-empresas.dto';
import { EmpresaService } from './empresas.service';
import { EmpresasEntity } from './entities/entity';

@ApiTags('Empresas')
@Controller('empresas')
export class EmpresaController {
  constructor(private readonly service: EmpresaService) {}

  @ApiOperation({
    summary: 'Cadastrar uma nova empresa',
  })
  @Post()
  async create(@Body() dto: CreateEmpresaDto): Promise<EmpresasEntity> {
    try {
      return await this.service.create(dto);
    } catch (err) {}
  }

  @ApiOperation({
    summary: 'Buscar todas as empresas',
  })
  @Get()
  async findAll(): Promise<EmpresasEntity[]> {
    try {
      return await this.service.findAll();
    } catch (err) {}
  }

  @ApiOperation({
    summary: 'Buscar uma empresa pelo ID',
  })
  @Get(':id')
  findById(@Param('id') id: string): Promise<EmpresasEntity> {
    try {
      return this.service.findById(id);
    } catch (err) {}
  }

  @ApiOperation({
    summary: 'Atualizar uma empresa pelo ID',
  })
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateEmpresaDto,
  ): Promise<EmpresasEntity> {
    try {
      return await this.service.update(id, dto);
    } catch (err) {}
  }

  @ApiOperation({
    summary: 'Remove uma empresa pelo ID',
  })
  @Delete(':id')
  delete(@Param('id') id: string): Promise<EmpresasEntity> {
    try {
      return this.service.delete(id);
    } catch (err) {}
  }
}
