import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GrandetabelaService } from './grandetabela.service';
import { CreateGrandetabelaDto } from './dto/create-grandetabela.dto';
import { UpdateGrandetabelaDto } from './dto/update-grandetabela.dto';

@Controller('grandetabela')
export class GrandetabelaController {
  constructor(private readonly grandetabelaService: GrandetabelaService) {}

  @Post()
  create(@Body() createGrandetabelaDto: CreateGrandetabelaDto) {
    return this.grandetabelaService.create(createGrandetabelaDto);
  }

  @Get()
  findAll() {
    return this.grandetabelaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.grandetabelaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGrandetabelaDto: UpdateGrandetabelaDto) {
    return this.grandetabelaService.update(+id, updateGrandetabelaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.grandetabelaService.remove(+id);
  }
}
