import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth/auth-service';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const token = authService.getToken();

  if (!token) {
    return next(req);
  }

  const request = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  });

  return next(request).pipe(
    catchError((error) => {
      if (error.status === 401) {
        authService.removeToken();
        router.navigate(['/login']);
      }

      return throwError(() => error);
    })
  );

};
