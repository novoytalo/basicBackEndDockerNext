import { Module } from '@nestjs/common';
import { GrandetabelaService } from './grandetabela.service';
import { GrandetabelaController } from './grandetabela.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Grandetabela } from './entities/grandetabela.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Grandetabela])],
  controllers: [GrandetabelaController],
  providers: [GrandetabelaService],
  exports: [TypeOrmModule],
})
export class GrandetabelaModule {}
