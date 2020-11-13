import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';

import { environment } from 'src/environments/environment';

import { IrisAuthService } from '../auth/iris.auth.service';
import { Observable } from 'rxjs';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  public institutoId: string = null;

  constructor(public auth: IrisAuthService) {
    var instituto_padrao_id = localStorage.getItem('instituto_padrao_id');

    if (instituto_padrao_id != null) {
      this.institutoId = instituto_padrao_id;
    }
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var n = request.url.includes(environment.HC_URL);
    var n2 = request.url.includes(environment.INTEGRACAO_URL);

    if (request.url !== environment.authIssuer + '/connect/token') {
      if (n || n2) {
        request = request.clone({
          setHeaders: {
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache',
            'Expires': 'Sat, 01 Jan 2000 00:00:00 GMT'
          }
        });
      } else {
        if (this.institutoId && this.institutoId.length > 0) {
          request = request.clone({
            setHeaders: {
              Authorization: `Bearer ${this.auth.getToken()}`,
              InstitutoId: this.institutoId,
              'Cache-Control': 'no-cache',
              'Pragma': 'no-cache',
              'Expires': 'Sat, 01 Jan 2000 00:00:00 GMT'
            }
          });
        } else {
          request = request.clone({
            setHeaders: {
              Authorization: `Bearer ${this.auth.getToken()}`,
              'Cache-Control': 'no-cache',
              'Pragma': 'no-cache',
              'Expires': 'Sat, 01 Jan 2000 00:00:00 GMT'
            }
          });
        }
      }
    } else {
      request = request.clone({
        setHeaders: {
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache',
          'Expires': 'Sat, 01 Jan 2000 00:00:00 GMT'
        }
      });
    }

    return next.handle(request);
  }
}
