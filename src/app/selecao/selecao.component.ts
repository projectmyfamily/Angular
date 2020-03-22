import { Router } from '@angular/router';
import { AccountDTO } from './../model/accountDTO';
import { Component, OnInit } from '@angular/core';
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
membros: any = [];
user: any
cad: MembrosCadastrar = { 
  foto: "",
  nome: "",
  parentesco: "", 
  sexo: "", 
  nascimento: "",
  pin: "",

}

pinPass = "";
pinUser = "";
idMembro = "";

  constructor(
    public storage: StorageService,
     public account: AccountService,
     public router: Router
     ) { 

     }

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
    this.storage.setAny(true)
  
  }

  logout(){ 
    this.storage.setLocalUser(null)
    this.storage.setAny(null)
    this.storage.setArrayMember(null)
    this.storage.setLocalMember(null)
    this.router.navigate(["/"])
  }



  deletar(id: string){ 
    this.account.deleteMembros(id).subscribe(response => { 
      console.log("Membro deletado")
      location.reload();
    }); error => { 
      console.log(error)
    }
  }


pass(){ 
  if(this.pinPass == this.pinUser){ 
    this.logado(this.idMembro);
  }else{
    console.log("err")
  }
}

pegaPin(pin: string, id:string){ 
this.pinUser = pin;
this.idMembro = id;

console.log(pin)
}



}
