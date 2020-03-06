import { HomeComponent } from './home/home.component';
import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public home = new HomeComponent


  constructor(){
  
  }
}
