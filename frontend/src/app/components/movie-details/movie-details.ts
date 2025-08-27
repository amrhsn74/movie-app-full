import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  templateUrl: './movie-details.html',
  styleUrls: ['./movie-details.css']
})
export class MovieDetailsComponent {
  movie: any = null;
  isLoading = true;
  errorMessage: string | null = null;

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.fetchMovie(id);
      } else {
        this.errorMessage = 'No movie ID provided.';
        this.isLoading = false;
      }
    });
  }

  fetchMovie(id: string) {
    this.isLoading = true;
    this.errorMessage = null;

    this.http.get(`http://localhost:4000/api/movies/${id}`).subscribe({
      next: (data) => {
        this.movie = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching movie:', err);
        this.errorMessage = 'Failed to load movie details.';
        this.isLoading = false;
      }
    });
  }
}
