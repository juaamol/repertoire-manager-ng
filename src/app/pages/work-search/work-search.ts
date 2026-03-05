import { Component, computed, inject, Signal, signal } from '@angular/core';
import { PageTitle } from '../../components/page-title/page-title';
import { Input } from '../../components/forms/input/input';
import { form, FormField, max, min, required } from '@angular/forms/signals';
import { Book } from '../../components/book/book';
import { Pentagram } from '../../components/forms/pentagram/pentagram';
import { SectionDivider } from '../../components/forms/section-divider/section-divider';
import { SelectDropdown } from '../../components/forms/select-dropdown/select-dropdown';
import { PieceStatus } from '../../core/enums/piece-status';
import { toSignal } from '@angular/core/rxjs-interop';
import { BREAKPOINTS, MatchingBreakpoints } from '../../core/constants/breakpoints';
import { BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs';
import { NgTemplateOutlet } from '@angular/common';
import { MAX_DIFFICULTY, MIN_DIFFICULTY } from '../../core/constants/difficulty';

interface WorkSearchForm {
  instrumentation: string;
  composer: string;
  title: string;
  difficulty: number;
  status: PieceStatus;
}

@Component({
  selector: 'app-work-search',
  imports: [
    PageTitle,
    Input,
    FormField,
    Book,
    Pentagram,
    SectionDivider,
    SelectDropdown,
    NgTemplateOutlet,
  ],
  templateUrl: './work-search.html',
  styleUrl: './work-search.scss',
})
export class WorkSearch {
  private breakpointObserver = inject(BreakpointObserver);

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

    min(schemaPath.difficulty, MIN_DIFFICULTY, { message: `Min value is ${MIN_DIFFICULTY}` });
    max(schemaPath.difficulty, MAX_DIFFICULTY, { message: `Max value is ${MAX_DIFFICULTY}` });
  });

  instrumentations = computed(() => {
    const instrumentation = this.searchForm.instrumentation().value().trim();
    return instrumentation ? [instrumentation] : [];
  });

  pieceStatus = Object.values(PieceStatus);

  breakpointChanges: Signal<MatchingBreakpoints> = toSignal(
    this.breakpointObserver.observe([BREAKPOINTS.medium, BREAKPOINTS.large]).pipe(
      map(({ breakpoints }) => ({
        isMedium: breakpoints[BREAKPOINTS.medium],
        isLarge: breakpoints[BREAKPOINTS.large],
      })),
    ),
    { initialValue: { isMedium: true, isLarge: false } },
  );

  onSubmit(event: Event) {
    event.preventDefault();
    const search = this.searchModel();
    console.log(search);
  }
}
