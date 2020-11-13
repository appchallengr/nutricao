import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { HelperService } from './helper.service';
import { HttpParams } from '@angular/common/http';
import { CategoriaDieta } from '../models/CategoriaDieta';

@Injectable()
export class LocalProducaoService {

    constructor(private api: ApiService, 
        private helperService: HelperService) { }

    public getAll(body, search): Observable<CategoriaDieta> {
        let params = new HttpParams();
        params = this.helperService.GetParamsForPaged(params, body);
        params = params.append('search', search);
        return this.api.getHttpParams('LocalProducao', params);
    }

    public getId(id): Observable<any> {
        return this.api.get('LocalProducao/'+ id);
    }

    public getExcel(filtro:string): Observable<any>{
        let params = new HttpParams();
        params = params.append('filtro', filtro);
        return this.api.getHttpParams('localProducao/exportar', params);
        
        //return this.api.get('LocalProducao/Exportar?filtro=' + filtro);
    }

    public getExcelHistorico(id): Observable<any>{
        return this.api.get('LocalProducao/Historico/' + id);
    }

    public getHistoric(body, search: string): Observable<CategoriaDieta> {
        let params = new HttpParams();
        params = this.helperService.GetParamsForPaged(params, body);
        params = params.append('search', search);
        return this.api.getHttpParams('LocalProducao/Historico', params);
    }

    public patch(model: any): Observable<any> {
        return this.api.patch('LocalProducao', model);
    }

    public add(model: any): Observable<any> {
        return this.api.post('LocalProducao', model);
    }

    public put(model: any): Observable<any> {
        return this.api.put('LocalProducao', model);
    }

}
