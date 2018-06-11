import { Component, OnInit } from '@angular/core';

import FormationService from "../services/formations/FormationService";
import { Formation } from '../../Formation';

@Component({
  selector: 'app-formation-list',
  templateUrl: './formation-list.component.html',
  styleUrls: ['./formation-list.component.css'],
  providers:[FormationService]
})

export class FormationListComponent implements OnInit {

  formations: Array<Formation>

  constructor(private formationService: FormationService) { }

  ngOnInit() {
 this.formationService.getFormation().then(value=>this.formations=value);
  }



}
