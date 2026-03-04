import { Component, input, model } from '@angular/core';
import { FormValueControl, ValidationError, WithOptionalFieldTree } from '@angular/forms/signals';
import { Pentagram } from '../forms/pentagram/pentagram';

@Component({
  selector: 'app-clef-input',
  imports: [Pentagram],
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
