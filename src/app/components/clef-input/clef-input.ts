import { Component, input } from '@angular/core';

@Component({
  selector: 'app-clef-input',
  imports: [],
  templateUrl: './clef-input.html',
  styleUrl: './clef-input.scss',
})
export class ClefInput {
  name = input('');
  type = input('text');
  label = input('');
}
