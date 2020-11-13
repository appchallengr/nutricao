import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JustificativaDietaComponent } from './justificativa-dieta.component';
import { JustificativaDietaFormComponent } from './justificativa-dieta-form/justificativa-dieta-form.component';


const routes: Routes = [
  { path: '', component: JustificativaDietaComponent },
  { path: ':acao', component: JustificativaDietaFormComponent },
  { path: ':acao/:id', component: JustificativaDietaFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JustificativaDietaRoutingModule { }
