import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  someText: string = "TESTANDO O PIPE OPERATOR";
  today: Date = new Date(2024,11,11,15,45);

  constructor() { }

  ngOnInit(): void {
  }

}
