import { MembrosDTO } from './../model/membrosDTO';
import { AccountService } from './../services/account.service';
import { StorageService } from './../services/storageService';
import { AccountDTO } from './../model/accountDTO';
import { LogadoComponent } from './../logado/logado.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-membros',
  templateUrl: './membros.component.html',
  styleUrls: ['./membros.component.css']
})
export class MembrosComponent implements OnInit {
ac: AccountDTO
membros: any;

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
            this.membros = this.ac.membros
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



}
