import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ReceitaDTO } from './dtos/receita';

@Injectable()
export class ReceitaService {
    
    constructor(private prismaService: PrismaService){}

    async getReceitaId(id: number)
    {
        const receitas = await this.prismaService.receita.findUnique(
            {
                where: { id}
            }
        );
        return receitas;
    }

    async getReceita()
    {
        const receitas = await this.prismaService.receita.findMany();
        return receitas;
    }

    async setReceita(data: ReceitaDTO)
    {
        const object = await this.prismaService.receita.create({data: data as any,});
        return object;
    }
    async updateReceita(id: number,data: ReceitaDTO)
    {
        const object = await this.prismaService.receita.update({
            where: {id},
            data
        });

        return object;
    }

    async deleteReceita(id: number)
    {
        const object =   await this.prismaService.receita.delete({
            where: {id}
        })

        const res = { message: "Deleted with success!", }
        return res;
    }

}
