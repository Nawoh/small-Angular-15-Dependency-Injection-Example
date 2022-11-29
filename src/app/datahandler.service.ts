import { Injectable } from '@angular/core';

@Injectable()
export class DatahandlerService {
  items = [
    { id: 1, name: 'Superman', beschreibung: 'Der Beste' },
    { id: 2, name: 'Batman' },
    { id: 5, name: 'BatGirl', beschreibung: 'Die Wilde' },
    { id: 3, name: 'Robin', beschreibung: 'Der Gerechte' },
    { id: 4, name: 'Flash', beschreibung: '' },
  ];

  constructor() {}

  getData() {
    return this.items;
  }
}

export class PeoplehandlerService {
  private people = [
    { vorname: 'Peter', nachname: 'Polster', job: 'Assistent' },
    { vorname: 'Mali-Tescherlose', nachname: 'Graser', job: 'Produktion' },
    { vorname: 'Steffi', nachname: 'Pauli', job: 'Fahrer' },
  ];

  getPeople() {
    return this.people;
  }
}
