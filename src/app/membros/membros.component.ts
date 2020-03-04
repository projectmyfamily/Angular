import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-membros',
  templateUrl: './membros.component.html',
  styleUrls: ['./membros.component.css']
})
export class MembrosComponent implements OnInit {
  nome ="Ana"
  idade="30"
  sexo="feminino"
  parentesco="mãe"
  pontos="400"

  constructor() { }

  ngOnInit() {
  }

}
