import { Component, input } from '@angular/core';
import { StringToColorPipe } from '../../pipes/string-to-color-pipe';

@Component({
  selector: 'app-book',
  imports: [StringToColorPipe],
  templateUrl: './book.html',
  styleUrl: './book.scss',
})
export class Book {
  title = input('Untitled');
  composer = input('Unknown');
}
