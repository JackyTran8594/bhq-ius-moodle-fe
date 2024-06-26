import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, delay, map, of, retry, take, tap, throwError } from 'rxjs';
import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { AuthService } from '../auth.service';
import { error } from 'console';
import { Router } from '@angular/router';

@Injectable()
export class JwtInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService,
    private router: Router,
    private authenticationService: AuthenticationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // debugger;
    const token = localStorage.getItem('access_token');
    if (token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });

    };
    return next.handle(req)
      .pipe(
        map((res: any) => {
          return res;
        }),
        catchError((error: HttpErrorResponse) => {
          console.log(error);
          if (error.status === 401) {
            this.router.navigate(['auth/login']);
          }
          return throwError(() => error);
        })

      )
      ;
  }
}
