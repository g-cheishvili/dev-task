import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from '../services/auth/auth.service';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService
  ) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers = this.authService.getToken() ? {
      Authorization: `Bearer ${this.authService.getToken()}`
    } : {};
    const clonedRequest = req.clone({
      setHeaders: {
        ...headers
      }
    });

    return next.handle(clonedRequest);
  }

}
