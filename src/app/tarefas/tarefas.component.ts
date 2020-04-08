import { Points } from './../model/points';
import { TarefasUpdate } from './../model/tarefasUpdate';
import { Subscribe } from './../services/subscribe';
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

  data = new Date().toLocaleString()
  
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
    nome: "",
    status: false, 
    nivel: "",
    pontuacao: "", 
    designar: "",
    dataInicial: this.data
  }


msg  = ""
tarefas: any = ""

tarefasIncompletas: any = []
tarefasCompletas: any = []
tipoPerfil = this.storage.getLocalMember().tipo
tipo = "RESPONSAVEL"

membrosComum = [];



cadUpdate: TarefasUpdate = { 
  status: true,
  dataFinal: this.data
}

points: Points = { 
  pontuacao: null
}




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

this.msg = "";




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
          
//for para  membros comuns
  for(let y = 0; y<this.membros.length;y++){ 
    if(this.membros[y].tipo != this.tipo){ 
      this.membrosComum.push(this.membros[y]);
    }
  }


this.cad.designar = this.storage.getLocalMember().nome;

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


  console.log(this.cad.designar)
  this.account.inserttarefas(this.cad, this.buscaMembros()).subscribe(response =>{ 
    console.log(response)
    this.loadUser()
    location.reload()
    this.msg = "Tarefa Cadastrada"

  }); error => { 
    console.log(error)
  }
}


buscaMembros(){
  var index = this.membros.map(function(element) {
    return element.nome
  }).indexOf(this.membroId)
  console.log(index)
  return this.membros[index].id


}



// concluir(id){ 
//   var index = this.tarefasIncompletas.map(function(element) {
//     return element.id
//   }).indexOf(id)
//   this.tarefasCompletas.push(this.tarefasIncompletas[index])
//   this.tarefasIncompletas.splice(index);

  
// }

concluir(id: string, t: TarefasDTO){ 
  this.addpoints(t);
  this.account.updateTarefas(this.cadUpdate, id).subscribe(response => { 
    this.account.updatePoints(this.points, this.storage.getLocalMember().id).subscribe(resp =>{ 
      console.log(resp);
      this.loadUser();
      location.reload()
    })
  })

}

addpoints(t: TarefasDTO){ 

  this.points.pontuacao = t.pontuacao;
  
}

}
 