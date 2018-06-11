import { Formation } from "../../../Formation";
import FormationApi from './formation-api';
import { Injectable } from "@angular/core";

@Injectable()
export default class FormationService {

    constructor(private formationApi: FormationApi) { }

    getFormation(): Promise<Array<Formation>> {
        return this.formationApi.fetchFormation();

    }
}