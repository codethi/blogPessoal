import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { OrderModule } from 'ngx-order-pipe';
import { ModalModule } from 'ngx-bootstrap/modal';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FeedComponent } from './feed/feed.component';
import { PerfilLateralComponent } from './perfil-lateral/perfil-lateral.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PostTemaComponent } from './post-tema/post-tema.component';
import { PutPostagemComponent } from './put-postagem/put-postagem.component';
import { PutTemaComponent } from './put-tema/put-tema.component';
import { DeletePostagemComponent } from './delete-postagem/delete-postagem.component';
import { DeleteTemaComponent } from './delete-tema/delete-tema.component';
import { AlertasComponent } from './alertas/alertas.component';

import { HashLocationStrategy, LocationStrategy } from '@angular/common'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    FeedComponent,
    PerfilLateralComponent,
    LoginComponent,
    CadastroComponent,
    PostTemaComponent,
    PutPostagemComponent,
    PutTemaComponent,
    DeletePostagemComponent,
    DeleteTemaComponent,
    AlertasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    OrderModule,
    ModalModule.forRoot()
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
