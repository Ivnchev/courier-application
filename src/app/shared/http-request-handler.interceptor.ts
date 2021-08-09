import { Injectable, Provider } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from "../../environments/environment";

@Injectable()
export class HttpRequestHandlerInterceptor implements HttpInterceptor {
  apiUrl = environment.baseUrl

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const checkUrl = /^https?:\/\//.test(req.url)
    if(!checkUrl) {
      req = req.clone({ url: this.apiUrl + req.url, withCredentials: true })
    }
    return next.handle(req)
  }
}


export const HttpRequestHandlerProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: HttpRequestHandlerInterceptor,
  multi: true
}