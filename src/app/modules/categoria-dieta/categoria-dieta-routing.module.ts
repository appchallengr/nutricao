import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriaDietaComponent } from './categoria-dieta.component';
import { CategoriaDietaFormComponent } from './categoria-dieta-form/categoria-dieta-form.component';


const routes: Routes = [
  { path: '', component: CategoriaDietaComponent },
  { path: ':acao', component: CategoriaDietaFormComponent },
  { path: ':acao/:id', component: CategoriaDietaFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriaDietaRoutingModule { }
