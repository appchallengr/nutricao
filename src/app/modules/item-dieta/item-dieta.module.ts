import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemDietaRoutingModule } from './item-dieta-routing.module';
import { ItemDietaComponent } from './item-dieta.component';
import { ItemDietaActiveComponent } from './item-dieta-active/item-dieta-active.component';
import { ItemDietaFormComponent } from './item-dieta-form/item-dieta-form.component';
import { ItemDietaHistoricoComponent } from './item-dieta-historico/item-dieta-historico.component';
import { SharedModule } from '../shared/shared.module';
import { MatTooltipModule } from '@angular/material';
import { ItemDietaService } from 'src/app/core/services/item-dieta-service';


@NgModule({
  declarations: [ItemDietaComponent, ItemDietaActiveComponent, ItemDietaFormComponent, ItemDietaHistoricoComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatTooltipModule,
    ItemDietaRoutingModule
  ],
  providers: [
    ItemDietaService
  ],
  entryComponents: [
    ItemDietaActiveComponent,
    ItemDietaHistoricoComponent
  ]
})
export class ItemDietaModule { }
