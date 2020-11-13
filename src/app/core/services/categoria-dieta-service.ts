import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { HelperService } from './helper.service';
import { HttpParams } from '@angular/common/http';
import { CategoriaDieta } from '../models/CategoriaDieta';

@Injectable()
export class CategoriaDietaService {

    constructor(private api: ApiService, 
        private helperService: HelperService) { }

    public getAll(body, search): Observable<CategoriaDieta> {
        let params = new HttpParams();
        params = this.helperService.GetParamsForPaged(params, body);

        params = params.append('search', search);

        return this.api.getHttpParams('CategoriaDieta', params);
    }

    public getId(id): Observable<any> {
        return this.api.get('CategoriaDieta/'+ id);
    }

    public getExcel(filtro:string): Observable<any>{
        return this.api.get('CategoriaDieta/Exportar?filtro='+filtro);
    }

    public getExcelHistorico(id): Observable<any>{
        return this.api.get('CategoriaDieta/Historico/' + id);
    }

    public getHistoric(body, search:string): Observable<CategoriaDieta> {
        let params = new HttpParams();
        params = this.helperService.GetParamsForPaged(params, body);
        params = params.append('search', search);
        return this.api.getHttpParams('CategoriaDieta/Historico', params);
    }

    public patch(model: any): Observable<any> {
        return this.api.patch('CategoriaDieta', model);
    }

    public add(model: any): Observable<any> {
        return this.api.post('CategoriaDieta', model);
    }

    public put(model: any): Observable<any> {
        return this.api.put('CategoriaDieta', model);
    }

}
