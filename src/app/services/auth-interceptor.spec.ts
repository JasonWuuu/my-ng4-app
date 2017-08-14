import { TestBed, inject } from '@angular/core/testing';

import { AuthInterceptor } from './auth-interceptor';

describe('AuthInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthInterceptorService]
    });
  });

  it('should be created', inject([AuthInterceptorService], (service: AuthInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
