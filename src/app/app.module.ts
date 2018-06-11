import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import FormationService from "./services/formations/FormationService";
import { FormationListComponent } from './formation-list/formation-list.component';
import FormationApi from './services/formations/formation-api';

@NgModule({
  declarations: [
    AppComponent,
    FormationListComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    FormationApi
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
