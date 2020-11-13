import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemDietaComponent } from './item-dieta.component';
import { ItemDietaFormComponent } from './item-dieta-form/item-dieta-form.component';


const routes: Routes = [
  { path: '', component: ItemDietaComponent },
  { path: ':acao', component: ItemDietaFormComponent },
  { path: ':acao/:id', component: ItemDietaFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemDietaRoutingModule { }
