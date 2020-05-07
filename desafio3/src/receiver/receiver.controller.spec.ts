import { Test, TestingModule } from '@nestjs/testing';
import { ReceiverController } from './receiver.controller';

describe('Receiver Controller', () => {
  let controller: ReceiverController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReceiverController],
    }).compile();

    controller = module.get<ReceiverController>(ReceiverController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
