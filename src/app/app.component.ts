import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  {{name}}
  <h1>{{score}} Beat the other team by {{score - lscore}}</h1>
  `
})
export class AppComponent  {
  name = 'Angular';
  score= 25;
  lscore= 5;

 }
