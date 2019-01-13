import { Component, Input } from '@angular/core';

/**
 * Generated class for the SplitLettersInputComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'split-letters-input',
  templateUrl: 'split-letters-input.html'
})
export class SplitLettersInputComponent {

  @Input() letters: Array<string>;

  constructor() {

  }

}
