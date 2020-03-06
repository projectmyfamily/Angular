import { AccountService } from './../services/account.service';
import { HomeComponent } from './../home/home.component';
import { Cadastrar } from './../model/cadastrar';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {





cad: Cadastrar = { 
nome: "",
email: "",
senha: ""
}






  constructor(public account: AccountService, public home: HomeComponent) { }

  ngOnInit() {

   
  }



  cadastro(){ 
    this.account.insert(this.cad)
    .subscribe(response =>{ 
      console.log("Cadastrado com sucesso")
      
    }), error =>{ 
      console.log (error)
    }

  }

  
test(){ 


}

 

}
