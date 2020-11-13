import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { HelperService } from './helper.service';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class HCService {

    constructor(private api: ApiService, 
        private helperService: HelperService) { }


    public getToken(): Observable<any> {
        return this.api.get('AutenticacaoHc');
    }

    public post(model: any): Observable<any> {
        return this.api.postHC('/api/v1/paciente/evolucao', model);
    }

}
