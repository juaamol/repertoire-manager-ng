import { Component, input, model } from '@angular/core';
import { FormValueControl, WithOptionalFieldTree, ValidationError } from '@angular/forms/signals';

@Component({
  selector: 'app-select-dropdown',
  imports: [],
  templateUrl: './select-dropdown.html',
  styleUrl: './select-dropdown.scss',
})
export class SelectDropdown implements FormValueControl<string> {
  value = model<string>('');
  id = input('');
  label = input('');
  options = input<string[]>([]);

  touched = model<boolean>(false);
  invalid = input<boolean>(false);
  errors = input<readonly WithOptionalFieldTree<ValidationError>[]>([]);
}
