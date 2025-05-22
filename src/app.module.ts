import { Module } from '@nestjs/common';
import { ReceitaModule } from './receita/receita.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [ReceitaModule,],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
