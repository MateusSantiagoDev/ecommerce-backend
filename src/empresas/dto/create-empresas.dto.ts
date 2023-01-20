import { ApiProperty } from "@nestjs/swagger";

export class CreateEmpresaDto {
    @ApiProperty({
        description: "Nome da empresa",
    })
    name: string;

    @ApiProperty({
        description: "CNPJ da empresa",
    })
    cnpj: string;

    @ApiProperty({
        description: "endereço da empresa",
    })
    endereco: string;

    @ApiProperty({
        description: "CEP da empresa",
    })
    cep: number;

    @ApiProperty({
        description: "Contato da empresa",
    })
    contato: number;

    @ApiProperty({
        description: "Email da empresa",
    })
    email: string;

    @ApiProperty({
        description: "Funcionários da empresa",
    })
    funcionario: string[];

    @ApiProperty({
        description: "Produtos da empresa",
    })
    produtos: string[];


}