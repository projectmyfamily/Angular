import { StorageService } from './../services/storageService';
import { AccountService } from './../services/account.service';
import { Component, OnInit } from '@angular/core';
import { Auth } from '../services/auth';
import { CredenciaisDTO } from '../model/credenciaisDTO';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  creds: CredenciaisDTO  = { 
    email: "", 
    senha: ""
}


err: string 



  constructor(public auth: Auth, public router: Router, public storage: StorageService) { }

  ngOnInit() {
if(this.storage.getLocalUser()){ 
 this.router.navigate(["/selecao"])
}
  }


  login() {
    this.auth.login(this.creds)
    .subscribe(response =>{
    this.auth.successLogin(response.headers.get('Authorization'));
     console.log("login success")
     
     this.router.navigate(["/selecao"])
  

    }, error =>{ 
      console.log(error)
      this.err = "Email ou senha incorretos!"
    })
}



account(){
  this.auth.remail(this.creds.email).subscribe(
    response =>{ 
      console.log(response)
    }
  ) 

}



}
