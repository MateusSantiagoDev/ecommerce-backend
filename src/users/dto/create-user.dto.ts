import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'Nome do usuário',
  })
  name: string;

  @ApiProperty({
    description: 'CPF do usuário',
  })
  cpf: string;

  @ApiProperty({
    description: 'Email do usuário',
  })
  email: string;

  @ApiProperty({
    description: 'Contato do usuário',
  })
  contato: number;

  @ApiProperty({
    description: 'Credencial do usuário',
  })
  role: string;

  @ApiProperty({
    description: 'Senha do usuário',
  })
  password: string;

  @ApiProperty({
    description: 'Confirmação da senha do usuário',
  })
  confirmPassword: string;
}
