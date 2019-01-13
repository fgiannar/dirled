import { Component } from '@angular/core';

/**
 * Generated class for the RiddleInputComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'riddle-input',
  templateUrl: 'riddle-input.html'
})
export class RiddleInputComponent {

  text: string;

  constructor() {
    console.log('Hello RiddleInputComponent Component');
    this.text = 'Hello World';
  }

}
