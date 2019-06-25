import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitExampleComponent } from './unit-example.component';

describe('UnitExampleComponent', () => {
  let component: UnitExampleComponent;
  let fixture: ComponentFixture<UnitExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
