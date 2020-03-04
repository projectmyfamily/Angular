import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logado',
  templateUrl: './logado.component.html',
  styleUrls: ['./logado.component.css']
})
export class LogadoComponent implements OnInit {
  nome = 'João Dolores';
  idade = '54 anos';
  parentesco = 'Pai';
  pontos = '30';

  constructor() { }

  ngOnInit() {
  }

}
