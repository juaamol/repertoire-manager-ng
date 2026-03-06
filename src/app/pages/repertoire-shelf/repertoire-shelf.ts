import { Component, inject } from '@angular/core';
import { Input } from '../../components/forms/input/input';
import { Book } from '../../components/book/book';
import { PageTitle } from '../../components/page-title/page-title';
import { Pentagram } from '../../components/forms/pentagram/pentagram';
import { Router } from '@angular/router';

@Component({
  selector: 'app-repertoire-shelf',
  imports: [Input, Book, PageTitle, Pentagram],
  templateUrl: './repertoire-shelf.html',
  styleUrl: './repertoire-shelf.scss',
})
export class RepertoireShelf {
  books = [
    {
      id: '1',
      title: 'Sonatas and Partitas',
      composer: 'Johann Sebastian Bach',
      cover: 'assets/bach-sonatas.jpg',
      classification: 'Adagio sostenuto — A haunting, nocturnal atmosphere defined by triplets.',
    },
    {
      id: '2',
      title: 'Violin Concertos Violin Concertos Violin Concertos',
      composer: 'Wolfgang Amadeus Mozart',
      cover: 'assets/mozart-concertos.jpg',
    },
    {
      id: '3',
      title: 'Violin Sonata No. 9',
      composer: 'Ludwig van Beethoven',
      cover: 'assets/beethoven-sonata.jpg',
      classification: 'Adagio sostenuto — A haunting, nocturnal atmosphere defined by triplets.',
    },
    {
      id: '4',
      title: 'Violin Concerto',
      composer: 'Pyotr Ilyich Tchaikovsky',
      cover: 'assets/tchaikovsky-concerto.jpg',
    },
    {
      id: '5',
      title: 'Caprices',
      composer: 'Niccolò Paganini',
      cover: 'assets/paganini-caprices.jpg',
    },
    {
      id: '6',
      title: 'The Four Seasons',
      composer: 'Antonio Vivaldi',
      cover: 'assets/vivaldi-seasons.jpg',
      classification: 'Adagio sostenuto — A haunting, nocturnal atmosphere defined by triplets.',
    },
    {
      id: '7',
      title: 'Violin Concerto',
      composer: 'Jean Sibelius',
      cover: 'assets/sibelius-concerto.jpg',
    },
    {
      id: '8',
      title: 'Violin Concerto',
      composer: 'Felix Mendelssohn',
      cover: 'assets/mendelssohn-concerto.jpg',
    },
  ];

  private router = inject(Router);

  goToWork(id: string) {
    this.router.navigate([`/works/${id}`]);
  }
}
