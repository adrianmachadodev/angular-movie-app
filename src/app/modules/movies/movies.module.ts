import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { SharedModule } from '@shared/shared.module';
import { MoviesPageComponent } from './pages/movies-page/movies-page.component';

@NgModule({
  declarations: [MoviesPageComponent],
  imports: [CommonModule, MoviesRoutingModule, SharedModule],
})
export class MoviesModule {}
