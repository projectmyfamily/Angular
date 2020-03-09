import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { LogadoComponent } from './logado/logado.component';
import { DesejosComponent } from './desejos/desejos.component';
import { TarefasComponent } from './tarefas/tarefas.component';
import { ConvidarComponent } from './convidar/convidar.component';
import { MembrosComponent } from './membros/membros.component';
import { AtividadesComponent } from './atividades/atividades.component';
import { SelecaoComponent } from './selecao/selecao.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'logado', component: LogadoComponent},
  {path: 'desejos', component: DesejosComponent},
  {path: 'tarefas', component: TarefasComponent},
  {path: 'convidar', component: ConvidarComponent},
  {path: 'membros', component: MembrosComponent},
  {path: 'atividades', component: AtividadesComponent},
  {path: 'selecao', component: SelecaoComponent},
  {path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
