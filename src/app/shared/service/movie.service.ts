import { Injectable } from '@angular/core';
import{movieList} from '../examples';
import { Movie } from '../model/movie';
import { Observable,Observer } from 'rxjs/Rx';


@Injectable()
export class MovieService {

  private movieList: Movie[];

  constructor() 
  {
    this.movieList = movieList.map((movie) => {
      return new Movie(
          movie.Id,
          movie.Name,
          movie.Director,
          movie.ImageUrl,
          movie.Duration,
          new Date(movie.RealeaseDate),
          movie.Genres
      );
  });

}
   public getMovies()
   {
      return new Observable((o: Observer<any>) =>
          {
            o.next(this.movieList);
              return o.complete();
           });
   }

   searchMoviesByTerm(term): Observable<Movie[]> {
    const foundMovies = this.movieList.filter((movie: Movie) => {
        return movie.Name.toLocaleLowerCase().includes(term.toLocaleLowerCase());
    });

    if (foundMovies.length === 0) {
        return Observable.throw(term);
    }
    return Observable.of(foundMovies);
}

}
