import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { HelperService } from './helper.service';
import { HttpParams } from '@angular/common/http';
import { CadastroUnidades } from '../models/CadastroUnidades';

@Injectable()
export class CadastroUnidadesService {

    constructor(private api: ApiService, 
        private helperService: HelperService) { }

    public getAll(body, search): Observable<CadastroUnidades> {
        let params = new HttpParams();
        params = this.helperService.GetParamsForPaged(params, body);
        if(search){
            params = params.append('search', search);
        }
        

        return this.api.getHttpParams('unidademedida', params);
    }

    public getId(id): Observable<any> {
        return this.api.get('unidademedida/'+ id);
    }

    public getExcel(filtro:any): Observable<any>{
        if(!filtro){
            filtro = "";
        }
        return this.api.get('unidademedida/exportar?filtro='+filtro);
    }

    public getExcelHistorico(id): Observable<any>{
        return this.api.get('unidademedida/Historico/' + id);
    }

    public getHistoric(body, search:string): Observable<CadastroUnidades> {
        let params = new HttpParams();
        params = this.helperService.GetParamsForPaged(params, body);
        params = params.append('search', search);
        return this.api.getHttpParams('unidademedida/Historico', params);
    }

    public patch(model: any): Observable<any> {
        return this.api.patch('unidademedida', model);
    }

    public add(model: any): Observable<any> {
        return this.api.post('unidademedida', model);
    }

    public put(model: any): Observable<any> {
        return this.api.put('unidademedida', model);
    }

    public getAtivos(): Observable<any> {
        return this.api.get('UnidadeMedidaAtivos');
    }

}
