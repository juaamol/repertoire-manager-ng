import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pentagram } from './pentagram';

describe('Pentagram', () => {
  let component: Pentagram;
  let fixture: ComponentFixture<Pentagram>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pentagram],
    }).compileComponents();

    fixture = TestBed.createComponent(Pentagram);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
