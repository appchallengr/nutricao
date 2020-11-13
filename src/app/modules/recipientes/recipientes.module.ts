import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipientesRoutingModule } from './recipientes-routing.module';
import { RecipientesComponent } from './recipientes.component';
import { RecipientesActiveComponent } from './recipientes-active/recipientes-active.component';
import { RecipientesFormComponent } from './recipientes-form/recipientes-form.component';
import { RecipientesHistoricoComponent } from './recipientes-historico/recipientes-historico.component';
import { SharedModule } from '../shared/shared.module';
import { MatTooltipModule } from '@angular/material';
import { RecipientesService } from 'src/app/core/services/recipientes.service';


@NgModule({
  declarations: [RecipientesComponent, RecipientesActiveComponent, RecipientesFormComponent, RecipientesHistoricoComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatTooltipModule,
    RecipientesRoutingModule
  ],
  providers: [
    RecipientesService
  ],
  entryComponents: [
    RecipientesActiveComponent,
    RecipientesHistoricoComponent
  ]
})
export class RecipientesModule { }
