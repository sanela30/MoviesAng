import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from '../service/movie.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { MovieRowComponent } from '../movie-row/movie-row.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [MovieService],

  declarations: [
    MovieRowComponent

  ],
  exports:[
    MovieRowComponent

  ]
})
export class SharedModule { }
