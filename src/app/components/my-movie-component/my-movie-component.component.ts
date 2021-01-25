import { Movie } from './../../shared/interfaces/movies.interface';
import { MoviesService } from './../../shared/services/movies.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-my-movie-component',
  templateUrl: './my-movie-component.component.html',
  styleUrls: ['./my-movie-component.component.scss'],
})
export class MyMovieComponentComponent implements OnInit, OnDestroy {
  id: any;
  moviesList: Movie[] = [];
  movie!: Movie;
  subscription!: Subscription;
  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    alert(this.id);
    alert(typeof this.id);
    this.subscription = this.moviesService
      .getMovies()
      .subscribe((data: any) => {
        this.moviesList = data.movies;
        this.movie = this.moviesList[this.id];
        console.log(this.moviesList[0]);
      });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
