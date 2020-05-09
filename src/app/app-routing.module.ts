import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { LogadoComponent } from './logado/logado.component';
import { DesejosComponent } from './desejos/desejos.component';
import { TarefasComponent } from './tarefas/tarefas.component';
import { MembrosComponent } from './membros/membros.component';
import { SelecaoComponent } from './selecao/selecao.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { CadAdultoComponent } from './cad-adulto/cad-adulto.component';
import { CadKidsComponent } from './cad-kids/cad-kids.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'logado', component: LogadoComponent},
  {path: 'desejos', component: DesejosComponent},
  {path: 'tarefas', component: TarefasComponent},
  {path: 'membros', component: MembrosComponent},
  {path: 'EditUser', component: EditUserComponent},
  {path: 'selecao', component: SelecaoComponent},
  {path: 'cadAdulto', component: CadAdultoComponent},  
  {path: 'cadKids', component: CadKidsComponent}, 
  {path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
