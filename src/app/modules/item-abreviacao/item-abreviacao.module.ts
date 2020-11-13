import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemAbreviacaoRoutingModule } from './item-abreviacao-routing.module';
import { ItemAbreviacaoComponent } from './item-abreviacao.component';
import { ItemAbreviacaoFormComponent } from './item-abreviacao-form/item-abreviacao-form.component';
import { ItemAbreviacaoActiveComponent } from './item-abreviacao-active/item-abreviacao-active.component';
import { ItemAbreviacaoHistoricoComponent } from './item-abreviacao-historico/item-abreviacao-historico.component';
import { MatTooltipModule } from '@angular/material';
import { SharedModule } from '../shared/shared.module';
import { ItemAbreviacaoService } from 'src/app/core/services/item-abreviacao-service';


@NgModule({
  declarations: [ItemAbreviacaoComponent, ItemAbreviacaoFormComponent, ItemAbreviacaoActiveComponent, ItemAbreviacaoHistoricoComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatTooltipModule,
    ItemAbreviacaoRoutingModule
  ],
  providers: [
    ItemAbreviacaoService
  ],
  entryComponents:[
    ItemAbreviacaoActiveComponent,
    ItemAbreviacaoHistoricoComponent
  ]
})
export class ItemAbreviacaoModule { }
