import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { CadastrosComponent } from './cadastros/cadastros.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClientesMockService } from './clientes/clientes-mock.service';
import { CadastroComponentComponent } from './cadastro-component/cadastro-component.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    SideMenuComponent,
    ForgotPasswordComponent,
    PaginaInicialComponent,
    CadastrosComponent,
    ClientesComponent,
    CadastroComponentComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    MatButtonModule,
    MatDialogModule,
    HttpClientModule,
  ],
  providers: [ClientesMockService],
  bootstrap: [AppComponent]

})
export class AppModule { }
