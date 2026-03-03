import {
  Component,
  input,
  InputSignal,
  InputSignalWithTransform,
  model,
  ModelSignal,
} from '@angular/core';
import { FormValueControl, ValidationError, WithOptionalFieldTree } from '@angular/forms/signals';

@Component({
  selector: 'app-clef-input',
  imports: [],
  templateUrl: './clef-input.html',
  styleUrl: './clef-input.scss',
})
export class ClefInput implements FormValueControl<string> {
  value = model('');
  id = input('');
  type = input('text');
  label = input('');

  touched = model<boolean>(false);
  invalid = input<boolean>(false);
  errors = input<readonly WithOptionalFieldTree<ValidationError>[]>([]);
}
