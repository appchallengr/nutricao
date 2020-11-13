import { Injectable } from '@angular/core'
import { Body } from '../models/Body'
import { HttpParams } from '@angular/common/http'

@Injectable()
export class HelperService {
  public GetParamsForPaged(params: HttpParams, body: Body) {
    if(body.orderProperty){
      params = params.append('orderProperty', body.orderProperty.toString())
    }
    params = params.append('page', body.page.toString())
    params = params.append('size', body.size.toString())
    params = params.append('orderCrescent', body.orderCrescent.toString())
    params = params.append('filterProperty', body.filterProperty.toString())
    params = params.append('filterValue', body.filterValue.toString())
    if(body.idAggregate){
      params = params.append('idAggregate', body.idAggregate.toString())
    }

    if(body.ativos){
      params = params.append('ativos', body.ativos.toString())
    }
    
    return params
  }
}
