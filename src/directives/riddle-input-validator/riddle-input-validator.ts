import { Directive, ElementRef, HostListener, Input } from '@angular/core';

/**
 * Generated class for the RiddleInputValidatorDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[riddle-input-validator]' // Attribute selector
})
export class RiddleInputValidatorDirective {

  regexStr = '^[A-Za-z0-9]*$';
  constructor(private el: ElementRef) { }

  @Input('riddle-input-validator') OnlyNumberOrAlpha: boolean;

  @HostListener('keydown', ['$event']) onKeyDown(event) {
    let e = <KeyboardEvent> event;
    if (this.OnlyNumberOrAlpha) {
        if (e.ctrlKey === true)
          e.preventDefault();
        if ([46, 8, 9, 27, 13].indexOf(e.keyCode) !== -1 ||
        // Allow: dash
        (e.keyCode == 189) ||
        // Allow: home, end, left, right
        (e.keyCode >= 35 && e.keyCode <= 39)) {
          // let it happen, don't do anything
          return;
        }

      let ch = String.fromCharCode(e.keyCode);
      let regEx =  new RegExp(this.regexStr);
      if(regEx.test(ch))
        return;
      else
         e.preventDefault();
      }
  }
}
