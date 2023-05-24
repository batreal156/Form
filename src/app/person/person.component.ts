import { Time } from '@angular/common';
import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PeopleService} from "./people.service";

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent {
  nombre: string = '';
  persona: number = 0;
  fecha: Date = new Date();
  hora: string = '';
  state: boolean = false;

  form: FormGroup;//Reactive Form

  constructor(private formBuilder: FormBuilder,
              private peopleService: PeopleService) {
    if (this.peopleService.selectedPerson) {
      this.form = formBuilder.group({
        id: [this.peopleService.selectedPerson.id],
        nombre: [this.peopleService.selectedPerson.nombre, [Validators.required, Validators.minLength(3)]],
        persona: [this.peopleService.selectedPerson.persona, [Validators.min(1)]],
        fecha: [this.peopleService.selectedPerson.fecha],
        hora: [this.peopleService.selectedPerson.hora],
        state: [this.peopleService.selectedPerson.state, []],
      });
    } else {
      this.form = formBuilder.group({
        id: [0],
        nombre: ['', [Validators.required, Validators.minLength(3)]],
        persona: [0, [Validators.min(1)]],
        fecha: [new Date()],
        hora: [0],
        state: [false, []],
      });
    }
  }

  onSubmit() {
    if (this.form.valid) {
      this.addPerson();
    } else {
      alert('Formulario No Valido');
    }
  }

  addPerson() {
    this.peopleService.addPerson(this.form.value);
    console.log(this.peopleService.people);
  }

  updatePerson() {
    this.peopleService.updatePerson(this.idField.value, this.form.value);
    console.log(this.peopleService.people);
  }

  validateForm() {
    if (this.nombre === '' && this.nombre.length <= 3) {

    }
  }

  get idField() {
    return this.form.controls['id'];
  }
}
