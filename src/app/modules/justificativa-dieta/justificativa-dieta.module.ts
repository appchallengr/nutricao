import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JustificativaDietaRoutingModule } from './justificativa-dieta-routing.module';
import { JustificativaDietaComponent } from './justificativa-dieta.component';
import { JustificativaDietaActiveComponent } from './justificativa-dieta-active/justificativa-dieta-active.component';
import { JustificativaDietaFormComponent } from './justificativa-dieta-form/justificativa-dieta-form.component';
import { JustificativaDietaHistoricoComponent } from './justificativa-dieta-historico/justificativa-dieta-historico.component';
import { JustificativaDietaService } from 'src/app/core/services/justificativa-dieta.service';
import { SharedModule } from '../shared/shared.module';
import { MatTooltipModule } from '@angular/material';


@NgModule({
  declarations: [JustificativaDietaComponent, JustificativaDietaActiveComponent, JustificativaDietaFormComponent, JustificativaDietaHistoricoComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatTooltipModule,
    JustificativaDietaRoutingModule
  ],
  providers: [
    JustificativaDietaService
  ],
  entryComponents: [
    JustificativaDietaActiveComponent,
    JustificativaDietaHistoricoComponent
  ]
})
export class JustificativaDietaModule { }
