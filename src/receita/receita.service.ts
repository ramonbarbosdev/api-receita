import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ReceitaDTO } from './dtos/receita';

@Injectable()
export class ReceitaService {
    
    constructor(private prismaService: PrismaService){}

    async getReceitaId(id: string)
    {
        const receitas = await this.prismaService.receita.findUnique(
            {
                where: { id: String(id) }
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

    async updateReceita(id: string, data: ReceitaDTO)
    {
        const object = await this.prismaService.receita.update({
            where: { id: String(id) },
            data: {
                title: data.title,
                description: data.description,
                task: Array.isArray(data.task) ? data.task : [], // Garante array
                tags: Array.isArray(data.tags) ? data.tags : [], // Garante array
            },
        });

        return object;
    }

    async deleteReceita(id: string)
    {
        const object =   await this.prismaService.receita.delete({
            where: { id: String(id) }
        })

        const res = { message: "Deleted with success!", }
        return res;
    }

}
