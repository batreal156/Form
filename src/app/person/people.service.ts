import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  people: any[] = [];
  selectedPerson: any = null;

  constructor() {
    this.loadPeople();
  }

  private loadPeople() {
    this.people = [];
    this.people.push(
      {id: 1, nombre: 'Andres', persona: 5, fecha: '24/05/2023', hora: '10:20', precio: '1000',color: '#001aff"', value: '4',state: true},
      {id: 2, nombre: 'Rodolfo', persona: 6, fecha: '11/04/2022',  hora: '10:20', precio: '4000',color: '#001aff"', value: '4',state: true}
    );
  }

  addPerson(payload: any) {
    this.people.push(payload);
  }

  updatePerson(id: number, payload: any) {
    const index = this.people.findIndex(person => person.id === id);
    this.people[index] = payload;
  }

  deletePerson(id: number) {
    const index = this.people.findIndex(person => person.id === id);
    if (index > -1) {
      this.people.splice(index, 1);
    }
  }
}
