import { NgModule } from '@angular/core';
import { AutoFocusDirective } from './auto-focus/auto-focus';
import { RiddleInputValidatorDirective } from './riddle-input-validator/riddle-input-validator';
@NgModule({
	declarations: [AutoFocusDirective,
    RiddleInputValidatorDirective],
	imports: [],
	exports: [AutoFocusDirective,
    RiddleInputValidatorDirective]
})
export class DirectivesModule {}
