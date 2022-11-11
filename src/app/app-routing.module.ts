import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroEmpresaComponent } from './cadastro-empresa/cadastro-empresa.component';
import { InicialComponent } from './inicial/inicial.component';

const routes: Routes = [
  {path:'home' , component:InicialComponent},
  {path:'cadastroempresa', component:CadastroEmpresaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
