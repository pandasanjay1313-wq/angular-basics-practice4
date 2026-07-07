import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Replace } from './replace';

describe('Replace', () => {
  let component: Replace;
  let fixture: ComponentFixture<Replace>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Replace],
    }).compileComponents();

    fixture = TestBed.createComponent(Replace);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
