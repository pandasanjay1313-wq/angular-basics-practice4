import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Frag } from './frag';

describe('Frag', () => {
  let component: Frag;
  let fixture: ComponentFixture<Frag>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Frag],
    }).compileComponents();

    fixture = TestBed.createComponent(Frag);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
