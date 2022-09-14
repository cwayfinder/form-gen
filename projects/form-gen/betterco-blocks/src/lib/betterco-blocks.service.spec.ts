import { TestBed } from '@angular/core/testing';

import { BettercoBlocksService } from './betterco-blocks.service';

describe('BettercoBlocksService', () => {
  let service: BettercoBlocksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BettercoBlocksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
