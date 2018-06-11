import { Component, OnInit } from '@angular/core';
import { Formation } from '../../Formation';

@Component({
  selector: 'app-formation-list',
  templateUrl: './formation-list.component.html',
  styleUrls: ['./formation-list.component.css']
})
export class FormationListComponent implements OnInit {

  constructor() { }

  formationList: Array<Formation> = [];

  ngOnInit() {
    this.formationList = [
      new Formation("java", "formation de java"),
      new Formation("Angular", "formation d'Angular"),
      new Formation("Js", "formation de JS"),
    ]
  }

}
