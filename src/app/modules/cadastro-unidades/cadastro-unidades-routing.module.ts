import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroUnidadesComponent } from './cadastro-unidades.component';
import { CadastroUnidadesFormComponent } from './cadastro-unidades-form/cadastro-unidades-form.component';


const routes: Routes = [
  { path: '', component: CadastroUnidadesComponent },
  { path: ':acao', component: CadastroUnidadesFormComponent },
  { path: ':acao/:id', component: CadastroUnidadesFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroUnidadesRoutingModule { }
