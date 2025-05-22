import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Request } from '@nestjs/common';
import { ReceitaDTO } from './dtos/receita';
import { ReceitaService } from './receita.service';

@Controller('receita')
export class ReceitaController {

    constructor(
        private receitaService: ReceitaService
    ){}
    
    @Get(':id')
    async getReceitaById(@Param('id') id: string)
    {
        const res = await this.receitaService.getReceitaId(+id);
        return res;
    }

    @Get('/')
    async getReceita(@Request() request)
    {
        const res = await this.receitaService.getReceita();
        return res;
    }

    @Post('/')
    async postReceita(@Body() receita: ReceitaDTO)
    {
        const res = await this.receitaService.setReceita(receita);
        return res;
    }

    @Put(':id')
    async updateReceita(@Param('id', ParseIntPipe) id: number, @Body() receita: ReceitaDTO)
    {
         const res = await this.receitaService.updateReceita(id, receita);
         return res;
    }

    @Delete(':id')
    async deleteReceita(@Param('id', ParseIntPipe) id: number)
    {
        const res = await this.receitaService.deleteReceita(id);
        return res;
    }

}
