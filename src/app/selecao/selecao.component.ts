import { Router } from '@angular/router';
import { AccountDTO } from './../model/accountDTO';
import { Component, OnInit } from '@angular/core';
import { RetornoBanco } from '../services/retorno.banco';
import { StorageService } from '../services/storageService';
import { AccountService } from '../services/account.service';
import { MembrosCadastrar } from '../model/membros.cadastrar';
import { MembrosService } from '../services/membros.service';
import { encode } from 'punycode';
import { HttpUrlEncodingCodec } from '@angular/common/http';


@Component({
  selector: 'app-selecao',
  templateUrl: './selecao.component.html',
  styleUrls: ['./selecao.component.css']
})
export class SelecaoComponent implements OnInit {
  base64textString: string;
ac: any;
membros: any = [];
user: any
cad: MembrosCadastrar = { 
  nome: "",
  parentesco: "", 
  sexo: "", 
  nascimento: "",
  pin: "",

}

subscribe = "";

  constructor(public storage: StorageService, public account: AccountService, public router: Router) { }

  ngOnInit() {
   if( this.storage.getLocalUser() == null){
     this.router.navigate(["/"])
   }
this.loadUser();

}

loadUser(){ 
  let localUser = this.storage.getLocalUser();
    if (localUser && localUser.email) {
      this.account.findByEmail(localUser.email)
        .subscribe(response => {
          this.ac = response as AccountDTO;
          this.membros = this.ac.membros
          this.user = this.ac.id
          
        },
        error => {
          if (error.status == 403) {
          }
        });
    }
    else {
    
    }    

}

cadastro(){ 

  this.account.insertMembros(this.cad, this.user)
  .subscribe(response =>{ 
    console.log("Cadastrado com sucesso")
    this.subscribe = "Cadastrado com Sucesso!"
    location.reload();
  }), error =>{ 
    console.log (error)
  }

}

  selectFile(event) {
    var files = event.target.files;
    var file = files[0];

    if (files && file) {
      var reader = new FileReader();

      reader.onload = this.handleFile.bind(this);

      reader.readAsBinaryString(file);
      
    }
  }

  handleFile(event) {
    var binaryString = event.target.result;
    this.base64textString = 'data:image/jpeg;base64,' + btoa(binaryString);
    console.log(btoa(binaryString));
  }



  logado(id: string){ 
    var index = this.membros.map(function(element) {
      return element.id
    }).indexOf(id)
    this.storage.setLocalMember(this.membros[index])
    this.router.navigate(["/logado/", index])
  }

  logout(){ 
    this.storage.setLocalUser(null)
    this.storage.setAny(null)
    this.storage.setArrayMember(null)
    this.storage.setLocalMember(null)
    this.router.navigate(["/"])
  }








}
