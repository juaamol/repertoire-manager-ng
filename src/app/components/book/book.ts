import { Component, input } from '@angular/core';
import { StringToColorPipe } from '../../pipes/string-to-color-pipe';
import { PieceStatus } from '../../core/enums/piece-status';
import { MAX_DIFFICULTY } from '../../core/constants/difficulty';

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
  catalogNumber = input('');
  status = input<PieceStatus>(PieceStatus.PLANNED);

  classification = input('');
  instrumentations = input<string[]>([]);

  maxDifficulty = MAX_DIFFICULTY;
  range = new Array(MAX_DIFFICULTY);
}
