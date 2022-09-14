import { TestBed } from '@angular/core/testing';

import { EditorBlocksService } from './editor-blocks.service';

describe('EditorBlocksService', () => {
  let service: EditorBlocksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditorBlocksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
