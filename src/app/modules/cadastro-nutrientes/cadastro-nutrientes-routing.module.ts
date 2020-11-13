import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroNutrientesComponent } from './cadastro-nutrientes.component';
import { CadastroNutrientesFormComponent } from './cadastro-nutrientes-form/cadastro-nutrientes-form.component';


const routes: Routes = [
  { path: '', component: CadastroNutrientesComponent },
  { path: ':acao', component: CadastroNutrientesFormComponent },
  { path: ':acao/:id', component: CadastroNutrientesFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroNutrientesRoutingModule { }
