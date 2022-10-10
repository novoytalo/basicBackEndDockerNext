import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
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
  @Get('interval_id/:interval_id_start/:interval_id_end')
  findAllid(
    @Param('interval_id_start') interval_id_start: number,
    @Param('interval_id_end') interval_id_end: number,
  ) {
    return this.grandetabelaService.findAllid(
      interval_id_start,
      interval_id_end,
    );
  }
  @Post('interval_date')
  findAllDate(
    @Body() data: any,
    // @Body('interval_date_end') interval_date_end: any,
  ) {
    return this.grandetabelaService.findAllDate(
      data.interval_date_start,
      data.interval_date_end,
    );
    // return this.grandetabelaService.findAllDate(
    //   interval_date_start,
    //   interval_date_end,
    // );
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.grandetabelaService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateGrandetabelaDto: UpdateGrandetabelaDto,
  ) {
    return this.grandetabelaService.update(+id, updateGrandetabelaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.grandetabelaService.remove(+id);
  }
}
