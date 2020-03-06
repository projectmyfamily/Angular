import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { LogadoComponent } from './logado/logado.component';
import { TarefasComponent } from './tarefas/tarefas.component';
import { DesejosComponent } from './desejos/desejos.component';
import { ConvidarComponent } from './convidar/convidar.component';
import { MembrosComponent } from './membros/membros.component';
import { MenuComponent } from './menu/menu.component';
import { AtividadesComponent } from './atividades/atividades.component';
import { SelecaoComponent } from './selecao/selecao.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    HomeComponent,
    LogadoComponent,
    TarefasComponent,
    DesejosComponent,
    ConvidarComponent,
    MembrosComponent,
    MenuComponent,
    AtividadesComponent,
    SelecaoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
