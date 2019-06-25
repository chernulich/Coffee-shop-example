import { Component, OnInit } from '@angular/core';
import {PersonHttpService} from '../service/http/person-http.service';
import {Person} from '../model/person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  constructor(private personHttpService: PersonHttpService) { }

  public persons: Person[] = [];

  ngOnInit() {
    return this.personHttpService.getPersons().subscribe(data => this.persons = data);
  }

}
