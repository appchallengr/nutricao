import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthCallbackComponent } from './core/auth-callback/auth-callback.component';
import { AuthGuard } from './core/auth/auth.guard';

const routes: Routes = [
  { path: 'categoria-dieta', loadChildren: './modules/categoria-dieta/categoria-dieta.module#CategoriaDietaModule' , canActivate: [AuthGuard] },
  { path: 'item-dieta', loadChildren: './modules/item-dieta/item-dieta.module#ItemDietaModule', canActivate: [AuthGuard] },
  { path: 'item-abreviacao', loadChildren: './modules/item-abreviacao/item-abreviacao.module#ItemAbreviacaoModule', canActivate: [AuthGuard] },
  { path: 'local-producao', loadChildren: './modules/local-producao/local-producao.module#LocalProducaoModule', canActivate: [AuthGuard] },
  { path: 'recipiente', loadChildren: './modules/recipientes/recipientes.module#RecipientesModule', canActivate: [AuthGuard] },
  { path: 'justificativa-dieta', loadChildren: './modules/justificativa-dieta/justificativa-dieta.module#JustificativaDietaModule', canActivate: [AuthGuard] },
  { path: 'unidade-medida', loadChildren: './modules/cadastro-unidades/cadastro-unidades.module#CadastroUnidadesModule', canActivate: [AuthGuard] },
  { path: 'nutrientes', loadChildren: './modules/cadastro-nutrientes/cadastro-nutrientes.module#CadastroNutrientesModule', canActivate: [AuthGuard] },
  { path: 'signin-oidc/:id', component: AuthCallbackComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
