import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ExampleComponent} from './example/example.component';
import {PersonComponent} from './person/person.component';
import {UnitExampleComponent} from './unit-example/unit-example.component';

const routes: Routes = [
  {path: '', component: ExampleComponent},
  {path: 'examples', component: ExampleComponent},
  {path: 'persons', component: PersonComponent},
  {path: 'unit', component: UnitExampleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
