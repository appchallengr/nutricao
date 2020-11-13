import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { HelperService } from './helper.service';
import { HttpParams } from '@angular/common/http';
import { CadastroUnidades } from '../models/CadastroUnidades';

@Injectable()
export class CadastroNutrientesService {

    constructor(private api: ApiService, 
        private helperService: HelperService) { }

    public getAll(body, search): Observable<CadastroUnidades> {
        let params = new HttpParams();
        params = this.helperService.GetParamsForPaged(params, body);
        if(search){
            params = params.append('search', search);
        }
        

        return this.api.getHttpParams('nutriente', params);
    }

    public getId(id): Observable<any> {
        return this.api.get('nutriente/'+ id);
    }

    public getExcel(filtro:any): Observable<any>{
        if(!filtro){
            filtro = "";
        }
        return this.api.get('nutriente/exportar?filtro='+filtro);
    }


    getFontesNutriente(id){
        return this.api.get('fontesnutriente?idNutriente='+id);
    }

    public getExcelHistorico(id): Observable<any>{
        return this.api.get('nutriente/Historico/' + id);
    }

    public getHistoric(body, search:string): Observable<CadastroUnidades> {
        let params = new HttpParams();
        params = this.helperService.GetParamsForPaged(params, body);
        params = params.append('search', search);
        return this.api.getHttpParams('nutriente/Historico', params);
    }

    public patch(model: any): Observable<any> {
        return this.api.patch('nutriente', model);
    }

    public add(model: any): Observable<any> {
        return this.api.post('nutriente', model);
    }

    public put(model: any): Observable<any> {
        return this.api.put('nutriente', model);
    }

}
