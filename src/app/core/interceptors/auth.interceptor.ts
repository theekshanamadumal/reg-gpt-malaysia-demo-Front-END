import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { getLoggedInUser, clearUser } from 'src/app/shared/helpers/auth';
import { AuthenticationService } from '../services/authentication.service';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private router: Router,
    private authService: AuthenticationService,
    private toastr: ToastrService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const authToken = getLoggedInUser()?.token;

    if (authToken) {
      const authRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      return next.handle(authRequest).pipe(tap(() => {}, 
      (err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status !== 401){
            return this.toastr.error("Something went wrong. Please try again later.");
          }
          const user = getLoggedInUser();
          this.authService.logOut(user.userName).subscribe((response) => {
            clearUser();
            this.router.navigate(['/login']);
            return this.toastr.error("Your session has expired.");
          });
          return false;
        }
      }
      ))
    }
    return next.handle(request);
  }
}
