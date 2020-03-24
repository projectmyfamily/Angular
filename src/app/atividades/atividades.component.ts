import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storageService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-atividades',
  templateUrl: './atividades.component.html',
  styleUrls: ['./atividades.component.css']
})
export class AtividadesComponent implements OnInit {

  constructor(public storage: StorageService,
    public router: Router) { }

  ngOnInit() {
  }
  logout(){ 
    this.storage.setLocalUser(null)
    this.storage.setAny(null)
    this.storage.setArrayMember(null)
    this.storage.setLocalMember(null)
    this.router.navigate(["/"])
  }
}
