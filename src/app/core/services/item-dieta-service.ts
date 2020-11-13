import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { HelperService } from './helper.service';
import { HttpParams } from '@angular/common/http';
import { ItemDieta } from '../models/ItemDieta';

@Injectable()
export class ItemDietaService {

    constructor(private api: ApiService, 
        private helperService: HelperService) { }

    public getAll(body, search): Observable<ItemDieta> {
        let params = new HttpParams();
        params = this.helperService.GetParamsForPaged(params, body);
        params = params.append('search', search);
        return this.api.getHttpParams('ItemDieta', params);
    }

    public getId(id): Observable<any> {
        return this.api.get('ItemDieta/'+ id);
    }

    public getExcel(filtro: string): Observable<any>{
        let params = new HttpParams();
        params = params.append('filtro', filtro);
        return this.api.getHttpParams('item-dieta/exportar', params);
        //return this.api.get('item-dieta/exportar?filtro=' + filtro);
    }

    public getExcelHistorico(id): Observable<any>{
        return this.api.get('item-dieta/historico/' + id);
    }

    public getHistoric(body, search:string): Observable<ItemDieta> {
        let params = new HttpParams();
        params = this.helperService.GetParamsForPaged(params, body);
        params = params.append('search', search);
        return this.api.getHttpParams('item-dieta/historico', params);
    }

    public patch(model: any): Observable<any> {
        return this.api.patch('ItemDieta', model);
    }

    public add(model: any): Observable<any> {
        return this.api.post('ItemDieta', model);
    }

    public put(model: any): Observable<any> {
        return this.api.put('ItemDieta', model);
    }

}
