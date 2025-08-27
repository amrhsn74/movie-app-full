import { Routes } from '@angular/router';
import { MoviesComponent } from './components/movies/movies';
import { MovieDetailsComponent } from './components/movie-details/movie-details';

export const routes: Routes = [
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
  { path: 'movies', component: MoviesComponent },
  { path: 'movies/:id', component: MovieDetailsComponent },
  { path: '**', redirectTo: 'movies' } // fallback
];
