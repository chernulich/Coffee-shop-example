import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Person} from '../../model/person';

@Injectable({
  providedIn: 'root'
})
export class PersonHttpService {

  constructor(private httpClient: HttpClient) { }

  getPersons() {
    return this.httpClient.get<Person[]>('/api/persons');
  }

  createPerson(person: Person) {
    return this.httpClient.post<Person>('/api/persons', person);
  }
}
