import { Component, signal } from '@angular/core';
import { PageTitle } from '../../page-title/page-title';
import { ClefInput } from '../../components/clef-input/clef-input';
import { form, FormField, required } from '@angular/forms/signals';
import { Book } from '../../components/book/book';

interface WorkSearchForm {
  instrumentation: string;
  composer: string;
  title: string;
}

@Component({
  selector: 'app-work-search',
  imports: [PageTitle, ClefInput, FormField, Book],
  templateUrl: './work-search.html',
  styleUrl: './work-search.scss',
})
export class WorkSearch {
  searchModel = signal<WorkSearchForm>({
    instrumentation: '',
    composer: '',
    title: '',
  });

  searchForm = form(this.searchModel, (schemaPath) => {
    required(schemaPath.instrumentation, { message: 'Instrumentation is required' });

    required(schemaPath.composer, { message: 'Composer is required' });

    required(schemaPath.title, { message: 'Title is required' });
  });

  onSubmit(event: Event) {
    event.preventDefault();
    const credentials = this.searchModel();
    console.log(credentials);
  }
}
