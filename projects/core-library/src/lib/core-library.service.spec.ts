import { TestBed } from '@angular/core/testing';

import { CoreLibraryService } from './core-library.service';

describe('CoreLibraryService', () => {
  let service: CoreLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoreLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
