import { Component, input, model } from '@angular/core';
import { FormValueControl, ValidationError, WithOptionalFieldTree } from '@angular/forms/signals';

@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './input.html',
  styleUrl: './input.scss',
})
export class Input implements FormValueControl<string | number> {
  value = model<string | number>('');
  id = input('');
  type = input<'email' | 'text' | 'password' | 'number'>('text');
  min = input<number | undefined>(undefined);
  max = input<number | undefined>(undefined);
  label = input('');

  touched = model<boolean>(false);
  invalid = input<boolean>(false);
  errors = input<readonly WithOptionalFieldTree<ValidationError>[]>([]);
}
