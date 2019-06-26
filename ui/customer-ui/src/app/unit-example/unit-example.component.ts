import { Component, OnInit } from '@angular/core';
import {ExampleHttpService} from '../service/http/example-http.service';
import {Example} from '../model/example';
import {CommonService} from '../service/common/common.service';

@Component({
  selector: 'app-unit-example',
  templateUrl: './unit-example.component.html',
  styleUrls: ['./unit-example.component.css']
})
export class UnitExampleComponent implements OnInit {

  public unitExample: Example;
  public id: number;

  constructor(private exampleHttpService: ExampleHttpService,
              private commonService: CommonService) { }

  getExample(id: number) {
    return this.exampleHttpService.getExamplesById(id).subscribe(data => this.unitExample = data);
}

  ngOnInit() {
     console.log(this.id = this.commonService.unitId);
     this.getExample(this.commonService.unitId);
  }

}
