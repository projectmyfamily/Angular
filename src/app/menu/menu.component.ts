import { Router } from '@angular/router';
import { StorageService } from './../services/storageService';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  nome = '';
  id = '';


  constructor(
    private storage: StorageService,
    public router: Router
  ) { }

  ngOnInit() {
    this.nome = this.storage.getLocalMember().nome
  }


  perfil(){ 
    this.id = this.storage.getArrayMember()
    this.router.navigate(["/logado",this.id])
  }

  logout(){ 
    this.storage.setLocalUser(null)
    this.storage.setAny(null)
    this.storage.setArrayMember(null)
    this.storage.setLocalMember(null)
    this.router.navigate(["/"])
  }
}
