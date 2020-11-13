import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriaDietaRoutingModule } from './categoria-dieta-routing.module';
import { CategoriaDietaComponent } from './categoria-dieta.component';
import { SharedModule } from '../shared/shared.module';
import { MatTooltipModule } from '@angular/material';
import { CategoriaDietaService } from 'src/app/core/services/categoria-dieta-service';
import { CategoriaDietaFormComponent } from './categoria-dieta-form/categoria-dieta-form.component';
import { CategoriaDietaActiveComponent } from './categoria-dieta-active/categoria-dieta-active.component';
import { CategoriaDietaHistoricoComponent } from './categoria-dieta-historico/categoria-dieta-historico.component';


@NgModule({
  declarations: [CategoriaDietaComponent, CategoriaDietaFormComponent, CategoriaDietaActiveComponent, CategoriaDietaHistoricoComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatTooltipModule,
    CategoriaDietaRoutingModule
  ],
  providers: [
    CategoriaDietaService
  ],
  entryComponents: [
    CategoriaDietaActiveComponent,
    CategoriaDietaHistoricoComponent
  ]
})
export class CategoriaDietaModule { }
