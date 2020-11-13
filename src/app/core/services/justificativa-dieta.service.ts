import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { HelperService } from './helper.service';
import { HttpParams } from '@angular/common/http';
import { JustificativaDieta } from '../models/JustificativaDieta';

@Injectable()
export class JustificativaDietaService {

    constructor(private api: ApiService, 
        private helperService: HelperService) { }

    public getAll(body, search): Observable<JustificativaDieta> {
        let params = new HttpParams();
        params = this.helperService.GetParamsForPaged(params, body);
        params = params.append('search', search);
        return this.api.getHttpParams('justificativadieta', params);
    }

    public getId(id): Observable<any> {
        return this.api.get('justificativadieta/'+ id);
    }

    public getExcel(filtro: string): Observable<any>{
        let params = new HttpParams();
        params = params.append('filtro', filtro);
        return this.api.getHttpParams('justificativadieta/exportar', params);
        //return this.api.get('item-dieta/exportar?filtro=' + filtro);
    }

    public getExcelHistorico(id): Observable<any>{
        return this.api.get('justificativadieta/historico/' + id);
    }

    public getHistoric(body, search:string): Observable<any> {
        let params = new HttpParams();
        params = this.helperService.GetParamsForPaged(params, body);
        params = params.append('search', search);
        return this.api.getHttpParams('justificativadieta/historico', params);
    }

    public patch(model: any): Observable<any> {
        return this.api.patch('justificativadieta', model);
    }

    public add(model: any): Observable<any> {
        return this.api.post('justificativadieta', model);
    }

    public put(model: any): Observable<any> {
        return this.api.put('justificativadieta', model);
    }

}
