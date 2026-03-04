import { Component } from '@angular/core';
import { ClefInput } from '../../components/forms/clef-input/clef-input';
import { Book } from '../../components/book/book';
import { PageTitle } from '../../page-title/page-title';
import { Pentagram } from '../../components/forms/pentagram/pentagram';

@Component({
  selector: 'app-repertoire-shelf',
  imports: [ClefInput, Book, PageTitle, Pentagram],
  templateUrl: './repertoire-shelf.html',
  styleUrl: './repertoire-shelf.scss',
})
export class RepertoireShelf {
  books = [
    {
      title: 'Sonatas and Partitas',
      composer: 'Johann Sebastian Bach',
      cover: 'assets/bach-sonatas.jpg',
      classification: 'Adagio sostenuto — A haunting, nocturnal atmosphere defined by triplets.',
    },
    {
      title: 'Violin Concertos Violin Concertos Violin Concertos',
      composer: 'Wolfgang Amadeus Mozart',
      cover: 'assets/mozart-concertos.jpg',
    },
    {
      title: 'Violin Sonata No. 9',
      composer: 'Ludwig van Beethoven',
      cover: 'assets/beethoven-sonata.jpg',
      classification: 'Adagio sostenuto — A haunting, nocturnal atmosphere defined by triplets.',
    },
    {
      title: 'Violin Concerto',
      composer: 'Pyotr Ilyich Tchaikovsky',
      cover: 'assets/tchaikovsky-concerto.jpg',
    },
    { title: 'Caprices', composer: 'Niccolò Paganini', cover: 'assets/paganini-caprices.jpg' },
    {
      title: 'The Four Seasons',
      composer: 'Antonio Vivaldi',
      cover: 'assets/vivaldi-seasons.jpg',
      classification: 'Adagio sostenuto — A haunting, nocturnal atmosphere defined by triplets.',
    },
    { title: 'Violin Concerto', composer: 'Jean Sibelius', cover: 'assets/sibelius-concerto.jpg' },
    {
      title: 'Violin Concerto',
      composer: 'Felix Mendelssohn',
      cover: 'assets/mendelssohn-concerto.jpg',
    },
  ];
}
