import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepertoireShelf } from './repertoire-shelf';

describe('RepertoireShelf', () => {
  let component: RepertoireShelf;
  let fixture: ComponentFixture<RepertoireShelf>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepertoireShelf],
    }).compileComponents();

    fixture = TestBed.createComponent(RepertoireShelf);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
