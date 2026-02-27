import { Component } from '@angular/core';
import { ClefInput } from '../../components/clef-input/clef-input';
import { Book } from '../../components/book/book';

@Component({
  selector: 'app-repertoire-shelf',
  imports: [ClefInput, Book],
  templateUrl: './repertoire-shelf.html',
  styleUrl: './repertoire-shelf.scss',
})
export class RepertoireShelf {
  books = [
    {
      title: 'Sonatas and Partitas',
      composer: 'Johann Sebastian Bach',
      cover: 'assets/bach-sonatas.jpg',
    },
    {
      title: 'Violin Concertos',
      composer: 'Wolfgang Amadeus Mozart',
      cover: 'assets/mozart-concertos.jpg',
    },
    {
      title: 'Violin Sonata No. 9',
      composer: 'Ludwig van Beethoven',
      cover: 'assets/beethoven-sonata.jpg',
    },
    {
      title: 'Violin Concerto',
      composer: 'Pyotr Ilyich Tchaikovsky',
      cover: 'assets/tchaikovsky-concerto.jpg',
    },
    { title: 'Caprices', composer: 'Niccolò Paganini', cover: 'assets/paganini-caprices.jpg' },
    { title: 'The Four Seasons', composer: 'Antonio Vivaldi', cover: 'assets/vivaldi-seasons.jpg' },
    { title: 'Violin Concerto', composer: 'Jean Sibelius', cover: 'assets/sibelius-concerto.jpg' },
    {
      title: 'Violin Concerto',
      composer: 'Felix Mendelssohn',
      cover: 'assets/mendelssohn-concerto.jpg',
    },
  ];
}
