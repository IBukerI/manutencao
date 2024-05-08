import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { CadastrosComponent } from './cadastros/cadastros.component';
import { ClientesComponent } from './clientes/clientes.component';
import { CadastroComponentComponent } from './cadastro-component/cadastro-component.component';



const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path : 'pagina-inicial', component: PaginaInicialComponent },
  { path: 'cadastros', component: CadastrosComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'cadastro', component: CadastroComponentComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
