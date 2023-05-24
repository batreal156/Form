import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {AppComponent} from './app.component';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputSwitchModule} from "primeng/inputswitch";
import {CalendarModule} from "primeng/calendar";
import {PanelModule} from "primeng/panel";
import {PersonComponent} from "./person/person.component";
import { PersonListComponent } from './person-list/person-list.component';
import {TableModule} from "primeng/table";

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    PersonListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    ButtonModule,
    InputNumberModule,
    InputTextModule,
    InputSwitchModule,
    CalendarModule,
    PanelModule,
    TableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
