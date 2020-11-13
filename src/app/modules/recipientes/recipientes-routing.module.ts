import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipientesComponent } from './recipientes.component';
import { RecipientesFormComponent } from './recipientes-form/recipientes-form.component';


const routes: Routes = [
  { path: '', component: RecipientesComponent },
  { path: ':acao', component: RecipientesFormComponent },
  { path: ':acao/:id', component: RecipientesFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipientesRoutingModule { }
