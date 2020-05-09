import { AccountService } from './services/account.service';
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
import { MembrosComponent } from './membros/membros.component';
import { Auth } from './services/auth';
import { StorageService } from './services/storageService';
import { HttpClientModule, HttpUrlEncodingCodec } from '@angular/common/http';
import { FormsModule }    from '@angular/forms';
import { SelecaoComponent } from './selecao/selecao.component';
import { RetornoBanco } from './services/retorno.banco';
import { MembrosService } from './services/membros.service';
import { EditUserComponent } from './edit-user/edit-user.component';
import { CadAdultoComponent } from './cad-adulto/cad-adulto.component';
import { CadKidsComponent } from './cad-kids/cad-kids.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    HomeComponent,
    LogadoComponent,
    TarefasComponent,
    DesejosComponent,
    MembrosComponent,
    SelecaoComponent,
    EditUserComponent,
    CadAdultoComponent,
    CadKidsComponent
    
    
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
    
    
  ],
  providers: [
    StorageService,
        Auth,
        HomeComponent,
        AccountService, 
        LogadoComponent, 
        RetornoBanco,
        MembrosService,
        HttpUrlEncodingCodec

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
