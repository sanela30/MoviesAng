import { Component, OnInit } from '@angular/core';
import { Movie } from '../../shared/model/movie';
import { MovieService } from '../../shared/service/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  private movies: Movie[] = [];


  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getMovies().subscribe(data => {
      this.movies = data;
  });

  }

}
