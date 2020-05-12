import { AccountDTO } from './../model/accountDTO';
import { StorageService } from './../services/storageService';
import { AccountService } from './../services/account.service';
import { Component, OnInit, Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-logado',
  templateUrl: './logado.component.html',
  styleUrls: ['./logado.component.css']
})
@Injectable()
export class LogadoComponent implements OnInit {
  membros: any = []
  ac: AccountDTO
  userId: any
  membro = {
    nome: "",
    nascimento: "",
    parentesco: "",
    pontos: ""
  }

  constructor(
    public storage: StorageService,
    public account: AccountService,
    public router: Router,
    private route: ActivatedRoute,
  ) {
    this.route.params.subscribe(params => this.userId = params['id']);
  }

  ngOnInit() {
    this.loadUser()
    if (this.storage.getLocalUser() == null) {
      this.router.navigate(["/"])

    }
    if(this.storage.getAny() == true){ 
      location.reload()
      this.storage.setAny(null)
    }


  }

  loadUser() {
    let localUser = this.storage.getLocalUser();
    if (localUser && localUser.email) {
      this.account.findByEmail(localUser.email)
        .subscribe(response => {
          this.ac = response as AccountDTO;
          this.membros = this.ac.membros
          console.log(this.membros)
          this.membro.nome = this.membros[this.userId].nome
          this.membro.nascimento = this.membros[this.userId].nascimento
          this.membro.parentesco = this.membros[this.userId].parentesco
          this.membro.pontos = this.membros[this.userId].pontuacao
          this.storage.setArrayMember(this.userId)
          console.log(this.membro)
        },
          error => {
            if (error.status == 403) {
            }
          });
    }
    else {

    }

  }
  logout(){ 
    this.storage.setLocalUser(null)
    this.storage.setAny(null)
    this.storage.setArrayMember(null)
    this.storage.setLocalMember(null)
    this.router.navigate(["/"])
  }




}
