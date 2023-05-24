import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PersonComponent} from "./person/person.component";
import {PersonListComponent} from "./person-list/person-list.component";

const routes: Routes = [
  {
    path: 'person',
    component: PersonComponent
  },
  {
    path: 'person-list',
    component: PersonListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
