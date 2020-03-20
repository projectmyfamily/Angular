import { Router } from '@angular/router';
import { StorageService } from './../services/storageService';
import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

email: any = null

 


  constructor(
    private storage: StorageService,
    public router: Router
  ) { 
   
  }

  ngOnInit() {
    
  }

  
subscribe(){ 
  if(this.email != null){
  this.storage.setAny(this.email);
  }else{ 
    this.storage.setAny(null)
  }
  this.router.navigate(["/cadastro"])
}



}
