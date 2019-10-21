import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { AppService } from '../app.service';

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

  constructor(private appService: AppService) {}

  selectColor(color: string) {
    this.selectedColor = color;
  }

  selectShape(shape: string) {
    this.selectedShape = shape;
  }

  saveUser() {
    this.appService.setUser(
      this.username.value,
      this.selectedColor,
      this.selectedShape
    );
  }
}
