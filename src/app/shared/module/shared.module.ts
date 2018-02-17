import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from '../service/movie.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [MovieService],
  
  declarations: []
})
export class SharedModule { }
