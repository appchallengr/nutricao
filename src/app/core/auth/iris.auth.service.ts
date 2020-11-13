import { Injectable, OnInit } from '@angular/core';

import { environment } from 'src/environments/environment';
import { OAuthService } from 'angular-oauth2-oidc';

import * as jwt_decode from 'jwt-decode';
import { AuthTokenService } from './auth.token.service';


@Injectable({
  providedIn: 'root'
})
export class IrisAuthService implements OnInit {

  tokenSuccess: boolean = false;
  renderHeader: boolean = false;

  constructor(private oauthService: OAuthService,
    private authTokenService: AuthTokenService) {
  }

  ngOnInit(): void {
  }

  public setTokenSessionStorage(token: string): void {
    sessionStorage.setItem(environment.sessionStorageToken, token);
  }
  
  public hasValidAccessToken(): boolean {
    const token = this.authTokenService.decodePayloadJWT();
    if (token) {
      let unix_timestamp = token.exp;
      let date = new Date(unix_timestamp * 1000);
      if (this.getCurrentDate() > date) {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  }

  public getToken(): string {
    return sessionStorage.getItem(environment.sessionStorageToken);
  }

  public decodePayloadJWT(): any {
    try {
      return jwt_decode(this.getToken());
    } catch (Error) {
      return null;
    }
  }

  public signout() {
    //sessionStorage.removeItem(environment.sessionStorageToken);
    //sessionStorage.clear();
    location.href = environment.authPostLogoutRedirectUri;
  }

  private getCurrentDate() {
    return new Date();
  }
}
