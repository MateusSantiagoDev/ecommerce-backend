import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { EmpresaRepository } from './empresa.repository';
import { EmpresaController } from './empresas.controller';
import { EmpresaService } from './empresas.service';

@Module({
  imports: [PrismaModule],
  controllers: [EmpresaController],
  providers: [EmpresaService, EmpresaRepository],
})
export class EmpresaModule {}
