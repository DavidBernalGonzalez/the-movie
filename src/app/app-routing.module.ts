import { MyMovieComponentComponent } from './components/my-movie-component/my-movie-component.component';
import { MyHomeComponentComponent } from './components/my-home-component/my-home-component.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: MyHomeComponentComponent },
  { path: 'movie/:id', component: MyMovieComponentComponent },
  { path: '**', component: MyHomeComponentComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
