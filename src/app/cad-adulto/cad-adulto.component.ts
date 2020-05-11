import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { StorageService } from '../services/storageService';
import { AccountService } from '../services/account.service';
import { Cadastrar } from '../model/cadastrar';

@Component({
  selector: 'app-cad-adulto',
  templateUrl: './cad-adulto.component.html',
  styleUrls: ['./cad-adulto.component.css']
})
export class CadAdultoComponent implements OnInit {

  constructor(public account: AccountService, 
    public home: HomeComponent,
    private storage: StorageService) { }

  ngOnInit() {
  }


  cad: Cadastrar = { 
    nome: "",
    email: "",
    senha: "", 
    senha2: ""
    }
    
    err = ""
    validForms: boolean = false
    validMsg = ""


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

}
