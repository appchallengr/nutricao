import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocalProducaoComponent } from './local-producao.component';
import { LocalProducaoFormComponent } from './local-producao-form/local-producao-form.component';


const routes: Routes = [
  { path: '', component: LocalProducaoComponent },
  { path: ':acao', component: LocalProducaoFormComponent },
  { path: ':acao/:id', component: LocalProducaoFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocalProducaoRoutingModule { }
