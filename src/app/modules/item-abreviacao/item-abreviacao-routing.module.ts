import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemAbreviacaoComponent } from './item-abreviacao.component';
import { ItemAbreviacaoFormComponent } from './item-abreviacao-form/item-abreviacao-form.component';


const routes: Routes = [
  { path: '', component: ItemAbreviacaoComponent },
  { path: ':acao', component: ItemAbreviacaoFormComponent },
  { path: ':acao/:id', component: ItemAbreviacaoFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemAbreviacaoRoutingModule { }
