import { Movie } from './../../shared/interfaces/movies.interface';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/shared/services/movies.service';

@Component({
  selector: 'app-my-home-component',
  templateUrl: './my-home-component.component.html',
  styleUrls: ['./my-home-component.component.scss'],
})
export class MyHomeComponentComponent implements OnInit {
  moviesList: Movie[] = [];

  constructor(public moviesService: MoviesService) {}

  ngOnInit(): any {
    const subscription = this.moviesService
      .getMovies()
      .subscribe((data: any) => {
        this.moviesList = data.movies;
        console.log(this.moviesList);
      });
  }

  hello(i: number): string{
    return 'filmPoster' + ' filmPoster' + i;
  }
}
