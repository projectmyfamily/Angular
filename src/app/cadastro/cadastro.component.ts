import { Subscribe } from './../services/subscribe';
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


  constructor(public sub: Subscribe) { }

  ngOnInit() {
  }



  cadastro(){ 
    this.sub.cadastrar(this.cad)
    .subscribe(response =>{ 
      console.log("Cadastrado com sucesso")

    }), error =>{ 
      console.log ("Error")
    }

  }

}
