import { Injectable } from '@angular/core';

import { Movie } from '../model/movie';
import { Observable,Observer } from 'rxjs/Rx';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';


@Injectable()
export class MovieService {

  private movieList: Movie[];

  constructor(private http: HttpClient) 
  {}


   public getMovies()
   {
      return new Observable((o: Observer<any>) =>
          {
            this.http.get('http://127.0.0.1:8000/api/movies').subscribe((movies: any[]) =>{
                this.movieList = movies.map((movie) =>
                {
                    return new Movie(
                        movie.id,
                        movie.name,
                        movie.director,
                        movie.image_url,
                        movie.duration,
                        movie.release_date,
                        movie.genres);
                });    
            o.next(this.movieList);
              return o.complete();
           });
        });
    }

    public getMovieById(id: number) {
        return new Observable((o: Observer<any>) => {
            this.http.get('http://localhost:8000/api/movies/' + id)
                .subscribe(
                (movie: any) => {
                    o.next(new Movie(
                        movie.id,
                        movie.name,
                        movie.director,
                        movie.image_url,
                        movie.duration,
                        movie.release_date,
                        movie.genres,
                    ));
                    return o.complete();
                }
                );
        });

    }
    

    public searchMoviesByTerm(term) {
        return new Observable((o: Observer<any>) => {
            let params = new HttpParams();
            params = params.append('term', term);

            this.http.get('http://localhost:8000/api/movies')
            .subscribe((movies: any) => {
                this.movieList = movies.map((movie) => {
                    return new Movie(
                        movie.id,
                        movie.name,
                        movie.director,
                        movie.image_url,
                        movie.duration,
                        movie.release_date,
                        movie.genres);
                });
                o.next(this.movieList);
                return o.complete();
            });
        });
    }

   

}
