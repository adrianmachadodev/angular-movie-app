import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsMovieComponent } from './cards-movie.component';

describe('CardsMovieComponent', () => {
  let component: CardsMovieComponent;
  let fixture: ComponentFixture<CardsMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
