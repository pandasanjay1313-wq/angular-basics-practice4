import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Skip } from './skip';

describe('Skip', () => {
  let component: Skip;
  let fixture: ComponentFixture<Skip>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Skip],
    }).compileComponents();

    fixture = TestBed.createComponent(Skip);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
