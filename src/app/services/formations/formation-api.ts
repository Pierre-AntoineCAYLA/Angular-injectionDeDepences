import { Component, OnInit, Injectable } from '@angular/core';
import { Formation } from '../../../Formation';

@Injectable()
export  default class FormationApi {

  fetchFormation(): Promise<Array<Formation>> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          new Formation("java", "formation de java"),
          new Formation("Angular", "formation d'Angular"),
          new Formation("Js", "formation de JS"),
        ])
      }, 2000);
    });
  }
}