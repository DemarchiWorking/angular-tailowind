import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './navegacao/nav/nav.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { CadastrarContaComponent } from './conta/cadastrar-conta/cadastrar-conta.component';
import { EntrarContaComponent } from './conta/entrar-conta/entrar-conta.component';
import { ContainerDoisColComponent } from './componentes/container/container-dois-col/container-dois-col.component';
import { ContainerTresColComponent } from './componentes/container/container-tres-col/container-tres-col.component';
import { BotaoToggleMenuComponent } from './componentes/botao-toggle-menu/botao-toggle-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    CadastrarContaComponent,
    EntrarContaComponent,
    ContainerDoisColComponent,
    ContainerTresColComponent,
    BotaoToggleMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
