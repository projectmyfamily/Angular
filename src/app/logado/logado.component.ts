import { AccountDTO } from './../model/accountDTO';
import { StorageService } from './../services/storageService';
import { AccountService } from './../services/account.service';
import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logado',
  templateUrl: './logado.component.html',
  styleUrls: ['./logado.component.css']
})
@Injectable()
export class LogadoComponent implements OnInit {
  nome: 'joão';
  idade = '54 anos';
  parentesco = 'Pai';
  pontos = '30';
  ac: AccountDTO

  constructor(public storage: StorageService, public account: AccountService, public router: Router) { }

  ngOnInit() {
    this.loadUser()
    if(this.storage.getLocalUser() == null){ 
      this.router.navigate(["/"])
      
    }
    
  }

loadUser(){ 
  let localUser = this.storage.getLocalUser();
    if (localUser && localUser.email) {
      this.account.findByEmail(localUser.email)
        .subscribe(response => {
          this.ac = response as AccountDTO;
          console.log(this.ac)
          
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
