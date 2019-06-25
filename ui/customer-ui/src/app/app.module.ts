import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { PersonComponent } from './person/person.component';
import { UnitExampleComponent } from './unit-example/unit-example.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    PersonComponent,
    UnitExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ExampleComponent, UnitExampleComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
