import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClefInput } from './clef-input';

describe('ClefInput', () => {
  let component: ClefInput;
  let fixture: ComponentFixture<ClefInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClefInput],
    }).compileComponents();

    fixture = TestBed.createComponent(ClefInput);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
