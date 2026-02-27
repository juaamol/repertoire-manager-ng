import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkSearch } from './work-search';

describe('WorkSearch', () => {
  let component: WorkSearch;
  let fixture: ComponentFixture<WorkSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkSearch],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkSearch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
