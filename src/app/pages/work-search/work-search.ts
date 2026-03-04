import { Component, computed, signal } from '@angular/core';
import { PageTitle } from '../../components/page-title/page-title';
import { Input } from '../../components/forms/input/input';
import { form, FormField, required } from '@angular/forms/signals';
import { Book } from '../../components/book/book';
import { Pentagram } from '../../components/forms/pentagram/pentagram';
import { SectionDivider } from '../../components/forms/section-divider/section-divider';
import { SelectDropdown } from '../../components/forms/select-dropdown/select-dropdown';
import { PieceStatus } from '../../enums/piece-status';

interface WorkSearchForm {
  instrumentation: string;
  composer: string;
  title: string;
  difficulty: number;
  status: PieceStatus;
}

@Component({
  selector: 'app-work-search',
  imports: [PageTitle, Input, FormField, Book, Pentagram, SectionDivider, SelectDropdown],
  templateUrl: './work-search.html',
  styleUrl: './work-search.scss',
})
export class WorkSearch {
  searchModel = signal<WorkSearchForm>({
    instrumentation: '',
    composer: '',
    title: '',
    difficulty: 0,
    status: PieceStatus.PLANNED,
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

  pieceStatus = Object.values(PieceStatus);

  onSubmit(event: Event) {
    event.preventDefault();
    const search = this.searchModel();
    console.log(search);
  }
}
