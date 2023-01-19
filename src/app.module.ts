import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { userModule } from './users/user.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [userModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
