import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarHeaderComponent } from './components/navbar-header/navbar-header.component';
import { BodyMovieComponent } from './components/body-movie/body-movie.component';
import { CardsMovieComponent } from './components/cards-movie/cards-movie.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavbarHeaderComponent,
    BodyMovieComponent,
    CardsMovieComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [NavbarHeaderComponent, BodyMovieComponent, CardsMovieComponent],
})
export class SharedModule {}
