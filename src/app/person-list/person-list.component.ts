import {Component} from '@angular/core';
import {PeopleService} from "../person/people.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent {
  people: any[] = [];
  selectedPerson: any;

  constructor(private peopleService: PeopleService, private router: Router) {
    this.people = this.peopleService.people;
  }

  createPerson() {
    this.peopleService.selectedPerson = null;
    this.router.navigate(['person']);
  }

  editPerson(person: any) {
    this.peopleService.selectedPerson = person;
    this.router.navigate(['person']);
  }

  deletePerson(id: number) {
    this.peopleService.deletePerson(id);
    console.log(this.peopleService.people);
  }
}
