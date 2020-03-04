import { LoginComponent } from "./login.component";
import { CadastroComponent } from '../cadastro/cadastro.component';
import { HomeComponent } from '../home/home.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogadoComponent } from '../logado/logado.component';
import { DesejosComponent } from '../desejos/desejos.component';
import { TarefasComponent } from '../tarefas/tarefas.component';
import { ConvidarComponent } from '../convidar/convidar.component';
import { MembrosComponent } from '../membros/membros.component';

const APP_ROUTES: Routes = [
    {path: 'login', component: LoginComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'logado', component: LogadoComponent},
  {path: 'desejos', component: DesejosComponent},
  {path: 'tarefas', component: TarefasComponent},
  {path: 'convidar', component: ConvidarComponent},
  {path: 'membros', component: MembrosComponent},
  {path: '', component: HomeComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);