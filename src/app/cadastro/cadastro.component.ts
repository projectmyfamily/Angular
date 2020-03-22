import { StorageService } from './../services/storageService';
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
senha: "", 
senha2: ""
}

err = ""
validForms: boolean = false
validMsg = ""





  constructor(public account: AccountService, 
    public home: HomeComponent,
    private storage: StorageService

    ) { }

  ngOnInit() {
    this.cad.email = this.storage.getAny()

    
   
  }



  cadastro(){ 
    if(this.cad.nome && this.cad.email && this.cad.senha && this.cad.senha2 != null){ 
      this.validForms = true
    }
    if(this.validForms == true){
      this.account.insert(this.cad)
      .subscribe(response =>{ 
        console.log("Cadastrado com sucesso")
        
      }), error =>{ 
        console.log (error)
      }
    }else{ 
      this.validMsg = "O formulário contêm erros, por favor verifique!"
    }
  



  }

  
  validPass(){ 
    if(this.cad.senha != this.cad.senha2){
      this.err = "As senhas são diferentes";
  }else{ 
    this.err = ""
  }
  }
}
