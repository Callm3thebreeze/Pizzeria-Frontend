import { TestBed } from '@angular/core/testing';

import { DeniedInterceptorService } from './denied-interceptor.service';

describe('DeniedInterceptorService', () => {
  let service: DeniedInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeniedInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
