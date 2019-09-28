import { Component } from '@angular/core';

@Component({
  selector: 'cypress-demo-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  colorList = ['blue', 'red', 'green', 'yellow', 'pink', 'orange'];
  shapeList = [
    'square',
    'circle',
    'oval',
    'rectangle',
    'parallelogram',
    'triangle'
  ];

  constructor() {}
}
