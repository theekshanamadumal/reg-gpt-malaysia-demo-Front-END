import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { isLoggedIn, getLoggedInUser, clearUser } from 'src/app/shared/helpers/auth';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router,
    private authService: AuthenticationService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (isLoggedIn()){
      if (this.authService.isTokenExpired()){
        const user = getLoggedInUser();
        this.authService.logOut(user.userName).subscribe((response) => {
          clearUser();
          this.router.navigate(['/login']);
        });
        return false;
      }else{
        return true;
      }
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
