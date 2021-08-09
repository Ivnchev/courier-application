import { TestBed } from '@angular/core/testing';

import { HttpRequestHandlerInterceptor } from './http-request-handler.interceptor';

describe('HttpRequestHandlerInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpRequestHandlerInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttpRequestHandlerInterceptor = TestBed.inject(HttpRequestHandlerInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
