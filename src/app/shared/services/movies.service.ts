import { HttpClient } from '@angular/common/http';
import { Movie } from './../interfaces/movies.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  moviesList: Movie[] = [];

  constructor(public httpClient: HttpClient) {
    this.getMovies();
  }

  getMovies(): any {
    return this.httpClient.get('./../../../assets/movies.json');
  }
}
