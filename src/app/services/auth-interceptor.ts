import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor, HttpRequest, HttpResponse, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const jwt = `Bearer ${this.authService.getToken()}`;
    // req.headers.append('Authorization', jwt);
    const clonedReq = req.clone({ setHeaders: { 'Authorization': jwt } });
    // return next.handle(clonedReq);

    return next.handle(clonedReq).map(event => {
      if (event instanceof HttpResponse) {
        if (event.status === 401) {
          // JWT expired, go to login
        }
      }
      return event;
    });
  }

}
