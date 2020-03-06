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



  constructor(public auth: Auth, public router: Router) { }

  ngOnInit() {
  }


  login() {
    this.auth.login(this.creds)
    .subscribe(response =>{
    this.auth.successLogin(response.headers.get('Authorization'));
     console.log("login success")
     console.log(response.headers)
     this.router.navigate(["/logado"])
    this.account();

    }, error =>{ 
      this.err = "Email ou senha invalidos!"
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
