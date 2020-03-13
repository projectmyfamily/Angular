import { Component, OnInit, ɵSWITCH_COMPILE_NGMODULE__POST_R3__ } from '@angular/core';
import { RetornoBanco } from '../services/retorno.banco';
import { AccountDTO } from '../model/accountDTO';
import { StorageService } from '../services/storageService';
import { AccountService } from '../services/account.service';
import { MembrosCadastrar } from '../model/membros.cadastrar';
import { Router } from '@angular/router';
import { MembrosService } from '../services/membros.service';
import { encode } from 'punycode';


@Component({
  selector: 'app-selecao',
  templateUrl: './selecao.component.html',
  styleUrls: ['./selecao.component.css']
})
export class SelecaoComponent implements OnInit {
base64textString: string;
ac: any;
membros: any[] = [];
idAccount: string
idMembro: any
cad: MembrosCadastrar = { 
  foto: "",
  nome: "",
  parentesco: "", 
  sexo: "", 
  idade: "",
  pin: "",

}


  constructor(
    public storage: StorageService, 
    public account: AccountService, 
    public router: Router,
    public membro: MembrosService
  ) { }

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
          this.idAccount = this.ac.id
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
  console.log(this.cad)
  console.log(this.idAccount)
  this.account.insertMembros(this.cad, this.idAccount)
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


logado(id: string){ 
let localId = encode(id); 
console.log(localId);
//this.router.navigate([`/logado?`])
  

}



}
