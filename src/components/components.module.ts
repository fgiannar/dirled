import { NgModule } from '@angular/core';
import { FlashCardComponent } from './flash-card/flash-card';
import { SplitLettersInputComponent } from './split-letters-input/split-letters-input';
import { RiddleInputComponent } from './riddle-input/riddle-input';
@NgModule({
	declarations: [FlashCardComponent,
    SplitLettersInputComponent,
    RiddleInputComponent],
	imports: [],
	exports: [FlashCardComponent,
    SplitLettersInputComponent,
    RiddleInputComponent]
})
export class ComponentsModule {}
