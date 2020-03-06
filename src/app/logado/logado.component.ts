import { AccountDTO } from './../model/accountDTO';
import { StorageService } from './../services/storageService';
import { AccountService } from './../services/account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logado',
  templateUrl: './logado.component.html',
  styleUrls: ['./logado.component.css']
})
export class LogadoComponent implements OnInit {
  nome: any;
  idade = '54 anos';
  parentesco = 'Pai';
  pontos = '30';
  ac: AccountDTO

  constructor(public storage: StorageService, public account: AccountService) { }

  ngOnInit() {
    this.loadUser()
  }

loadUser(){ 
  let localUser = this.storage.getLocalUser();
    if (localUser && localUser.email) {
      this.account.findByEmail(localUser.email)
        .subscribe(response => {
          this.ac = response as AccountDTO;
          console.log(this.ac)
          this.nome = this.ac.nome
        },
        error => {
          if (error.status == 403) {
          }
        });
    }
    else {
    
    }    

}



}
