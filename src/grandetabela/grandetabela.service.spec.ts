import { Test, TestingModule } from '@nestjs/testing';
import { GrandetabelaService } from './grandetabela.service';

describe('GrandetabelaService', () => {
  let service: GrandetabelaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GrandetabelaService],
    }).compile();

    service = module.get<GrandetabelaService>(GrandetabelaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
