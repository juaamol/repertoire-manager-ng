import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClefLoginForm } from './clef-login-form';

describe('ClefLoginForm', () => {
  let component: ClefLoginForm;
  let fixture: ComponentFixture<ClefLoginForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClefLoginForm],
    }).compileComponents();

    fixture = TestBed.createComponent(ClefLoginForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
