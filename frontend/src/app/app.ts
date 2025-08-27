import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('movie-frontend');
}
import { MoviesComponent } from './components/movies/movies';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MoviesComponent],
  template: `<app-movies></app-movies>`
})
export class AppComponent {}

