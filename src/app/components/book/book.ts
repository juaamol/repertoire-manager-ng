import { Component, computed, input } from '@angular/core';
import { StringToColorPipe } from '../../pipes/string-to-color-pipe';

const MAX_DIFFICULTY = 5;

@Component({
  selector: 'app-book',
  imports: [StringToColorPipe],
  templateUrl: './book.html',
  styleUrl: './book.scss',
})
export class Book {
  title = input('Untitled');
  composer = input('Unknown');
  difficulty = input(1);
  status = input(0);
  classification = input('');
  instrumentations = input<string[]>([]);

  maxDifficulty = MAX_DIFFICULTY;
  maxStatus = MAX_DIFFICULTY;

  range = new Array(MAX_DIFFICULTY);
}
