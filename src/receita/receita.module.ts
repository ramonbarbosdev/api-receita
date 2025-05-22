import { Module } from '@nestjs/common';
import { ReceitaService } from './receita.service';
import { ReceitaController } from './receita.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [ReceitaService, PrismaService],
  controllers: [ReceitaController]
})
export class ReceitaModule {}
