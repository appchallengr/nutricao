import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocalProducaoRoutingModule } from './local-producao-routing.module';
import { LocalProducaoComponent } from './local-producao.component';
import { LocalProducaoActiveComponent } from './local-producao-active/local-producao-active.component';
import { LocalProducaoFormComponent } from './local-producao-form/local-producao-form.component';
import { LocalProducaoHistoricoComponent } from './local-producao-historico/local-producao-historico.component';
import { LocalProducaoService } from 'src/app/core/services/local-producao-service';
import { SharedModule } from '../shared/shared.module';
import { MatTooltipModule } from '@angular/material';


@NgModule({
  declarations: [LocalProducaoComponent, LocalProducaoActiveComponent, LocalProducaoFormComponent, LocalProducaoHistoricoComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatTooltipModule,
    LocalProducaoRoutingModule
  ],
  providers: [
    LocalProducaoService
  ],
  entryComponents: [
    LocalProducaoActiveComponent,
    LocalProducaoHistoricoComponent
  ]
})
export class LocalProducaoModule { }
