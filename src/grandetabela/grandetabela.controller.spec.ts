import { Test, TestingModule } from '@nestjs/testing';
import { GrandetabelaController } from './grandetabela.controller';
import { GrandetabelaService } from './grandetabela.service';

describe('GrandetabelaController', () => {
  let controller: GrandetabelaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GrandetabelaController],
      providers: [GrandetabelaService],
    }).compile();

    controller = module.get<GrandetabelaController>(GrandetabelaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
