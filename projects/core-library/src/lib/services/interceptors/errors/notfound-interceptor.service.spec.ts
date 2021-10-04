import { TestBed } from '@angular/core/testing';

import { NotFoundInterceptorService } from './notfound-interceptor.service';

describe('NotfoundInterceptorService', () => {
  let service: NotFoundInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotFoundInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
