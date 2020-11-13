import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroUnidadesRoutingModule } from './cadastro-unidades-routing.module';
import { CadastroUnidadesComponent } from './cadastro-unidades.component';
import { MatTooltipModule } from '@angular/material';
import { SharedModule } from '../shared/shared.module';
import { CadastroUnidadesService } from 'src/app/core/services/cadastro-unidades.service';
import { CadastroUnidadesFormComponent } from './cadastro-unidades-form/cadastro-unidades-form.component';
import { CadastroUnidadesActiveComponent } from './cadastro-unidades-active/cadastro-unidades-active.component';
import { CadastroUnidadesHistoricoComponent } from './cadastro-unidades-historico/cadastro-unidades-historico.component';


@NgModule({
  declarations: [CadastroUnidadesComponent, CadastroUnidadesFormComponent, CadastroUnidadesActiveComponent, CadastroUnidadesHistoricoComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatTooltipModule,
    CadastroUnidadesRoutingModule
  ],
  providers:[
    CadastroUnidadesService
  ],
  entryComponents: [
    CadastroUnidadesActiveComponent
  ]
})
export class CadastroUnidadesModule { }
