import { TestBed } from '@angular/core/testing';

import { NotfoundInterceptorService } from './notfound-interceptor.service';

describe('NotfoundInterceptorService', () => {
  let service: NotfoundInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotfoundInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
