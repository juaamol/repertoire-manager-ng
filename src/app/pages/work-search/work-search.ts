import { Component, computed, signal } from '@angular/core';
import { PageTitle } from '../../components/page-title/page-title';
import { ClefInput } from '../../components/forms/clef-input/clef-input';
import { form, FormField, required } from '@angular/forms/signals';
import { Book } from '../../components/book/book';
import { Pentagram } from '../../components/forms/pentagram/pentagram';
import { SectionDivider } from '../../components/forms/section-divider/section-divider';

interface WorkSearchForm {
  instrumentation: string;
  composer: string;
  title: string;
  difficulty: number;
  status: number;
}

@Component({
  selector: 'app-work-search',
  imports: [PageTitle, ClefInput, FormField, Book, Pentagram, SectionDivider],
  templateUrl: './work-search.html',
  styleUrl: './work-search.scss',
})
export class WorkSearch {
  searchModel = signal<WorkSearchForm>({
    instrumentation: '',
    composer: '',
    title: '',
    difficulty: 0,
    status: 0,
  });

  searchForm = form(this.searchModel, (schemaPath) => {
    required(schemaPath.instrumentation, { message: 'Instrumentation is required' });

    required(schemaPath.composer, { message: 'Composer is required' });

    required(schemaPath.title, { message: 'Title is required' });
  });

  instrumentations = computed(() => {
    const instrumentation = this.searchForm.instrumentation().value().trim();
    return instrumentation ? [instrumentation] : [];
  });

  onSubmit(event: Event) {
    event.preventDefault();
    const credentials = this.searchModel();
    console.log(credentials);
  }
}
