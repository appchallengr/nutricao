import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { map } from "rxjs/operators";
import { AuthTokenService } from '../auth/auth.token.service';

@Injectable()
export class PoliciesService {

  visualizar = false;
  criar = false;
  editar = false;
  inativar = false;
  ativar = false;
  historico = false;
  imprimir = false; // pdf
  exportar = false; //excell

  //Politicas espeficicas
  bloquear: boolean = false;
  desbloquear: boolean = false;

  constructor(
    private http: HttpClient,
    private authTokenService: AuthTokenService
  ) { }

  getPolicies(identificador: string) {
    const institutoId = localStorage.getItem('instituto_padrao_id');
    const token: any = this.authTokenService.decodePayloadJWT();

    if (token.flagAdministrador !== 'False') {
      this.isAdmin();
    }
    else {
      this.resetDefault();

      this.http.get(`${environment.urlPoliticas + institutoId}&identificador=${identificador}`)
        .subscribe(
          (data: any) => {
            data.forEach((element: string) => {
              switch (element.toLocaleLowerCase()) {
                case "criar":
                  this.criar = true;
                  break;

                case "editar":
                  this.editar = true;
                  break;

                case "inativar":
                  this.inativar = true;
                  break;

                case "ativar":
                  this.ativar = true;
                  break;

                case "visualizar":
                  this.visualizar = true;
                  break;

                case "imprimir":
                  this.imprimir = true;
                  break;

                case "bloquear":
                  this.bloquear = true;
                  break;

                case "desbloquear":
                  this.desbloquear = true;
                  break;

                case "histórico":
                  this.historico = true;
                  break;

                case "historico":
                    this.historico = true;
                    break;

                case "exportar":
                  this.exportar = true;
                  break;
              }
            });
          }
        )
    }
  }

  private isAdmin() {
    this.visualizar = true;
    this.criar = true;
    this.editar = true;
    this.inativar = true;
    this.ativar = true;
    this.imprimir = true;
    this.exportar = true;
    this.bloquear = true;
    this.desbloquear = true;
    this.historico = true;
  }

  private resetDefault() {
    this.visualizar = false;
    this.criar = false;
    this.editar = false;
    this.inativar = false;
    this.ativar = false;
    this.imprimir = false;
    this.exportar = false;
    this.bloquear = false;
    this.desbloquear = false;
  }

}
