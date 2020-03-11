import { Component, OnInit } from '@angular/core';
import { RetornoBanco } from '../services/retorno.banco';
import { AccountDTO } from '../model/accountDTO';
import { StorageService } from '../services/storageService';
import { AccountService } from '../services/account.service';
import { MembrosCadastrar } from '../model/membros.cadastrar';


@Component({
  selector: 'app-selecao',
  templateUrl: './selecao.component.html',
  styleUrls: ['./selecao.component.css']
})
export class SelecaoComponent implements OnInit {
  base64textString: string;
ac: any;
membros: any;
user = this.ac;
cad: MembrosCadastrar = { 
  nome: "",
  parentesco: "", 
  sexo: "", 
  idade: "",
  pin: "",
  account: this.user

}


  constructor(public storage: StorageService, public account: AccountService) { }

  ngOnInit() {
this.loadUser();

}

loadUser(){ 
  let localUser = this.storage.getLocalUser();
    if (localUser && localUser.email) {
      this.account.findByEmail(localUser.email)
        .subscribe(response => {
          this.ac = response as AccountDTO;
          this.membros = this.ac.membros
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
  this.account.insertMembros(this.cad)
  .subscribe(response =>{ 
    console.log("Cadastrado com sucesso")
    this.loadUser();
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









}
