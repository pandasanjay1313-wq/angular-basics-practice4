import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Counts } from './counts';

describe('Counts', () => {
  let component: Counts;
  let fixture: ComponentFixture<Counts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Counts],
    }).compileComponents();

    fixture = TestBed.createComponent(Counts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
