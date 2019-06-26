import { Component, OnInit } from '@angular/core';
import {ExampleHttpService} from '../service/http/example-http.service';
import {Example} from '../model/example';
import {CommonService} from '../service/common/common.service';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  public isHeaderShadow = false;
  public tableRowsShadows: boolean [] = [];

  public examples: Example[] = [];
  public exampleName: string;
  public unitId: number;

  constructor(private exampleHttpService: ExampleHttpService,
              private commonService: CommonService) {
  }

  getExamples() {
    return this.exampleHttpService.getExamples().subscribe(data => this.examples = data);
  }
  saveExample(exampleName: string) {
    return this.exampleHttpService.saveExample(exampleName).subscribe(data => {
      this.examples.push(data);
      this.exampleName = '';
    });
  }

  ngOnInit() {
    this.getExamples();
  }

  sendId(id: number) {
    this.commonService.unitId = id;
  }
}
