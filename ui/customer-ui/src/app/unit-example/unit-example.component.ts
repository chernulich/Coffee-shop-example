import { Component, OnInit } from '@angular/core';
import {ExampleHttpService} from '../service/http/example-http.service';
import {Example} from '../model/example';
import {ExampleComponent} from '../example/example.component';

@Component({
  selector: 'app-unit-example',
  templateUrl: './unit-example.component.html',
  styleUrls: ['./unit-example.component.css']
})
export class UnitExampleComponent implements OnInit {

  public unitExample: Example;
  public id: number;

  constructor(private exampleHttpService: ExampleHttpService,
              private example: ExampleComponent) { }

  getExample(id: number) {
    return this.exampleHttpService.getExamplesById(id).subscribe(data => this.unitExample = data);
}

  ngOnInit() {
     console.log(this.id = this.example.unitId);
     this.getExample(2);
  }

}
