import { PartialType } from '@nestjs/mapped-types';
import { CreateGrandetabelaDto } from './create-grandetabela.dto';

export class UpdateGrandetabelaDto extends PartialType(CreateGrandetabelaDto) {}
