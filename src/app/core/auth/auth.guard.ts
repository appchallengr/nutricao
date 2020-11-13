import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { IrisAuthService } from './iris.auth.service';
import { OAuthService } from 'angular-oauth2-oidc';
import { PoliciesService } from '../services/policies.service';


@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private irisAuthService: IrisAuthService,
        private oauthService: OAuthService,
        public policiesService: PoliciesService,
        private router: Router) {

    }

    canActivate(): boolean {

        var lastUrl = window.location.pathname != "signin-oidc" ? window.location.pathname : "/";
        localStorage.setItem('lastUrl', lastUrl);
        var hasValidAccessToken = this.irisAuthService.hasValidAccessToken();
    
        if(hasValidAccessToken) {
            this.irisAuthService.renderHeader = true;

            let urlAtual: any = location.href.split("/").pop();
            //urlAtual = urlAtual[0].split('%7C');
            this.policiesService.getPolicies(`nutricao%23${urlAtual}`);
            return true;
        }

        this.router.navigate(['/login']);

        return false;
       
    }
}