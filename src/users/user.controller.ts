import { Controller, Get } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { userEntity } from './entities/entity';
import { userService } from './user.service';

@Controller('users')
export class userController {
  constructor(private readonly service: userService) {}

  @ApiOperation({
    summary: 'Buscar todos os usuários',
  })
  @Get()
  findAll(): Promise<userEntity[]> {
    return this.service.findAll()
  }
}
