import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { HelperService } from './helper.service';
import { HttpParams } from '@angular/common/http';
import { Recipiente } from '../models/Recipiente';

@Injectable()
export class RecipientesService {

    constructor(private api: ApiService, 
        private helperService: HelperService) { }

    public getAll(body, search): Observable<Recipiente> {
        let params = new HttpParams();
        params = this.helperService.GetParamsForPaged(params, body);

        params = params.append('search', search);

        return this.api.getHttpParams('Recipiente', params);
    }

    public getId(id): Observable<any> {
        return this.api.get('Recipiente/'+ id);
    }

    public getExcel(filtro): Observable<any>{
        let params = new HttpParams();
        
        params = params.append('filtro', filtro);

        return this.api.getHttpParams('recipiente/exportar', params);
        // return this.api.get('recipiente/exportar');
    }

    public getExcelHistorico(id): Observable<any>{
        return this.api.get('recipiente/historico/' + id);
    }

    public getHistoric(body, search: string): Observable<Recipiente> {
        
        let params = new HttpParams();
        params = this.helperService.GetParamsForPaged(params, body);
        params = params.append('search', search);

        return this.api.getHttpParams('recipiente/historico', params);
    }

    public patch(model: any): Observable<any> {
        return this.api.patch('Recipiente', model);
    }

    public add(model: any): Observable<any> {
        return this.api.post('Recipiente', model);
    }

    public put(model: any): Observable<any> {
        return this.api.put('Recipiente', model);
    }

}
