import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { userModule } from './users/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { EmpresaModule } from './empresas/empresas.module';

@Module({
  imports: [userModule, EmpresaModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
