import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { clearUser, getLoggedInUser } from 'src/app/shared/helpers/auth';
import { UrlConfigs } from 'src/app/shared/url-configs/url-configs';
import { RequestManagerService } from './request-manager.service';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
    constructor(private router: Router, private restApiService:RequestManagerService,
        private urlConfig: UrlConfigs) {}

    logOn(username: string, password: string) {
        let url = `${this.urlConfig.getValueByKey('Login')}`;
        return this.restApiService.post(url, {username, password});
    }

    logOut(username: string) {
        let url = `${this.urlConfig.getValueByKey('Logout')}`;
        return this.restApiService.post(url, {username});
    }

    isTokenExpired(): boolean {
        const token = getLoggedInUser()?.token;
        if (!token) {
            return true;
        }
        const decodedToken: any = jwtDecode(token);
        return Date.now() >= decodedToken.exp * 1000;
    }
}
