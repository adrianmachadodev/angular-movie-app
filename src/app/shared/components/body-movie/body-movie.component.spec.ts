import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyMovieComponent } from './body-movie.component';

describe('BodyMovieComponent', () => {
  let component: BodyMovieComponent;
  let fixture: ComponentFixture<BodyMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
