import { TarefasCadastrar } from './../model/tarefas.cadastrar';
import { TarefasDTO } from './../model/tarefasDTO';
import { Router, ActivatedRoute } from '@angular/router';
import { AccountService } from './../services/account.service';
import { StorageService } from './../services/storageService';
import { Component, OnInit } from '@angular/core';
import { AccountDTO } from './../model/accountDTO';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent implements OnInit {
  membros: any = []
  ac: AccountDTO
  userId: any
  membroId: any

  membro = {
    nome: "",
    nascimento: "",
    parentesco: "",
    pontos: "",
    tipo: ""
  }

  cad: TarefasDTO = { 
    id: "",
    nome: ""
  }

tarefas: any = ""

tarefasIncompletas: any = []
tarefasCompletas: any = []
tipoPerfil = this.storage.getLocalMember().tipo
tipo = "RESPONSAVEL"

  constructor(
    public storage: StorageService,
    public account: AccountService,
    public router: Router,
    private route: ActivatedRoute,


  ) { }

  ngOnInit() {

    this.loadUser()
    if (this.storage.getLocalUser() == null) {
      this.router.navigate(["/"])
   
   
    }
  this.tarefas = this.storage.getLocalMember().tarefas

for(let x =0; x<this.tarefas.length; x++){ 
    if(this.tarefas[x].status == false ){ 
      this.tarefasIncompletas.push(this.tarefas[x])
    }else{ 
      this.tarefasCompletas.push(this.tarefas[x])
    }



}

  console.log(this.tipoPerfil)
  }


  loadUser() {
    let localUser = this.storage.getLocalUser();
    if (localUser && localUser.email) {
      this.account.findByEmail(localUser.email)
        .subscribe(response => {
          this.ac = response as AccountDTO;
          this.membros = this.ac.membros
         this.storage.setLocalMember(this.membros[this.storage.getArrayMember()])
          console.log(this.membros)
        },
          error => {
            if (error.status == 403) {
            }
          });
    }
    else {

    }

  }

cadastrar(id: string){ 
  this.account.inserttarefas(this.cad, this.buscaMembros()).subscribe(response =>{ 
    console.log(response)
    this.loadUser()
    location.reload()


  }); error => { 
    console.log(error)
  }
}


buscaMembros(){
  var index = this.membros.map(function(element) {
    return element.nome
  }).indexOf(this.membroId)
  return this.membros[index].id

}

}
 