import { TestBed } from '@angular/core/testing';

import { CommonBlocksService } from './common-blocks.service';

describe('CommonBlocksService', () => {
  let service: CommonBlocksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonBlocksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
