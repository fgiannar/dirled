import { Directive, ElementRef, Input, OnInit, Renderer } from '@angular/core';

/**
 * Generated class for the AutoFocusDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[auto-focus]' // Attribute selector
})
export class AutoFocusDirective implements OnInit {

  @Input('auto-focus') isFocused: boolean;

  constructor(private hostElement: ElementRef, private renderer: Renderer) {}

  ngOnInit() {
    if (this.isFocused) {
      console.log(this.hostElement.nativeElement);
      this.renderer.invokeElementMethod(this.hostElement.nativeElement, 'focus');
    }
  }
}