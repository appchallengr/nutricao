import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthTokenService {
  decodePayloadJWT(): any {
    let jwt = jwt_decode;
    try {
      return jwt(this.getToken());
    } catch (Error) {
      return null;
    }
  }
  private getToken(): string {
    return sessionStorage.getItem('access_token_iris');
  }
}