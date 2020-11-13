import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { HelperService } from './helper.service';
import { HttpParams } from '@angular/common/http';
import { ItemAbreviacao } from '../models/ItemAbreviacao';

@Injectable()
export class ItemAbreviacaoService {

    constructor(private api: ApiService, 
        private helperService: HelperService) { }

    public getAll(body, search): Observable<ItemAbreviacao> {
        let params = new HttpParams();
        params = this.helperService.GetParamsForPaged(params, body);
        params = params.append('search', search);

        return this.api.getHttpParams('ItemAbreviacaoJejum', params);
    }

    public getId(id): Observable<any> {
        return this.api.get('ItemAbreviacaoJejum/'+ id);
    }

    public getExcel(filtro:string): Observable<any>{
        let params = new HttpParams();
        params = params.append('filtro', filtro);

        return this.api.getHttpParams('ItemAbreviacaoJejum/Exportar', params);
        //return this.api.get('ItemAbreviacaoJejum/Exportar?filtro=' + filtro);
    }

    public getExcelHistorico(id): Observable<any>{
        return this.api.get('ItemAbreviacaoJejum/Historico/' + id);
    }

    public getHistoric(body, search: string): Observable<ItemAbreviacao> {
        let params = new HttpParams();
        params = this.helperService.GetParamsForPaged(params, body);
        params = params.append('search', search);

        return this.api.getHttpParams('ItemAbreviacaoJejum/Historico', params);
    }

    public patch(model: any): Observable<any> {
        return this.api.patch('ItemAbreviacaoJejum', model);
    }

    public add(model: any): Observable<any> {
        return this.api.post('ItemAbreviacaoJejum', model);
    }

    public put(model: any): Observable<any> {
        return this.api.put('ItemAbreviacaoJejum', model);
    }

}
