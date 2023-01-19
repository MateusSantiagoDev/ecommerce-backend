import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { userController } from './user.controller';
import { userRepository } from './user.repository';
import { userService } from './user.service';

@Module({
  imports: [PrismaModule],
  controllers: [userController],
  providers: [userService, userRepository],
})
export class userModule {}
