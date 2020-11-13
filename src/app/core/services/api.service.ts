import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IrisAuthService } from '../auth/iris.auth.service';

@Injectable()
export class ApiService {

  public httpOptions;
  public httpOptionsHC;

  constructor(
    private http: HttpClient,
    private irisAuthService: IrisAuthService
  ) {

    var token = this.irisAuthService.getToken();

    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    };

    this.httpOptionsHC = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionStorage.getItem('hc-token')}`
      })
    };
    
  }

  public get(path: string): Observable<any> {
    return this.http.get(`${environment.API_URL}/${path}`, this.httpOptions);
  }


  public getHC(path: string): Observable<any> {
    return this.http.get(`${environment.HC_URL}/${path}`);
  }
  

  public put(path: string, body: object = {}): Observable<any> {
    return this.http.put(
      `${environment.API_URL}/${path}`,
      JSON.stringify(body), this.httpOptions);
  }

  public patch(path: string, body: object = {}): Observable<any> {
    return this.http.patch(
      `${environment.API_URL}/${path}`,
      JSON.stringify(body), this.httpOptions);
  }

  public getHttpParams(path: string, Params: HttpParams): Observable<any> {
    return this.http.get(`${environment.API_URL}/${path}`, {
      params: Params,
      headers: this.httpOptions,
    })
  }

  public getHttpParamsIntegracao(path: string, Params: HttpParams): Observable<any> {
    return this.http.get(`${environment.INTEGRACAO_URL}/${path}`, {
      params: Params,
      headers: this.httpOptions,
    })
  }

  public post(path: string, body: object = {}): Observable<any> {
    return this.http.post(
      `${environment.API_URL}/${path}`,
      JSON.stringify(body),
      this.httpOptions);
  }

  public postHC(path: string, body: object = {}): Observable<any> {
    return this.http.post(
      `${environment.IrisIntegracaoPrescricao}/${path}`,
      JSON.stringify(body),
      this.httpOptionsHC);
  }

  public postFormData(path: string, body: object = {}): Observable<any> {
    const newBody = this.getFormUrlEncoded(body);
    return this.http.post(
      `${environment.API_URL}/${path}`,
      newBody.toString(),
      this.httpOptions);
  }

  public getFormUrlEncoded(toConvert) {
    const urlSearchParams = new URLSearchParams();

    // tslint:disable-next-line:forin
    for (const property in toConvert) {
      const encodedKey = property;
      const encodedValue = toConvert[property];
      urlSearchParams.append(encodedKey, encodedValue);
    }

    return urlSearchParams;
  }

  public delete(path): Observable<any> {
    return this.http.delete(`${environment.API_URL}/${path}`, this.httpOptions);
  }
}
