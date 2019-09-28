import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'cypress-demo-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  selectedColor = '';
  selectedShape = '';
  colorList = ['blue', 'red', 'green', 'yellow', 'pink', 'orange'];
  shapeList = [
    'square',
    'circle',
    'oval',
    'rectangle',
    'parallelogram',
    'triangle'
  ];
  username = new FormControl('', Validators.required);

  constructor() {}

  selectColor(color: string) {
    this.selectedColor = color;
  }

  selectShape(shape: string) {
    this.selectedShape = shape;
  }
}
