import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroNutrientesRoutingModule } from './cadastro-nutrientes-routing.module';
import { CadastroNutrientesComponent } from './cadastro-nutrientes.component';
import { CadastroNutrientesFormComponent } from './cadastro-nutrientes-form/cadastro-nutrientes-form.component';
import { CadastroNutrientesActiveComponent } from './cadastro-nutrientes-active/cadastro-nutrientes-active.component';
import { SharedModule } from '../shared/shared.module';
import { MatTooltipModule } from '@angular/material';
import { CadastroNutrientesService } from 'src/app/core/services/cadastro-nutrientes.service';
import { CadastroUnidadesService } from 'src/app/core/services/cadastro-unidades.service';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [CadastroNutrientesComponent, CadastroNutrientesFormComponent, CadastroNutrientesActiveComponent],
  imports: [
    CommonModule,
    CadastroNutrientesRoutingModule,
    NgSelectModule,
    SharedModule,
    MatTooltipModule,
  ],
  providers:[
    CadastroNutrientesService,
    CadastroUnidadesService
  ],
  entryComponents: [
    CadastroNutrientesActiveComponent
  ]
})
export class CadastroNutrientesModule { }
