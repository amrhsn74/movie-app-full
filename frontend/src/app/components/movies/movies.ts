import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  templateUrl: './movies.html',
  styleUrls: ['./movies.css']
})
export class MoviesComponent {
  movies: any[] = [];
  isLoading = true;
  errorMessage: string | null = null;

  currentPage = 1;
  itemsPerPage = 8;

  constructor(private http: HttpClient) {
    this.fetchMovies();
  }

  fetchMovies() {
    this.isLoading = true;
    this.errorMessage = null;

    this.http.get<any[]>('http://localhost:4000/api/movies').subscribe({
      next: (data) => {
        this.movies = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching movies:', err);
        this.errorMessage = 'Failed to load movies.';
        this.isLoading = false;
      }
    });
  }

  get paginatedMovies() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.movies.slice(startIndex, startIndex + this.itemsPerPage);
  }

  totalPages() {
    return Math.ceil(this.movies.length / this.itemsPerPage);
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage = page;
    }
  }
}
