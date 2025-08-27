import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-recommendations',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
  templateUrl: './recommendations.html',
  styleUrls: ['./recommendations.css']
})
export class RecommendationsComponent implements OnChanges {
  @Input() movieId!: string;

  recommendations: any[] = [];
  isLoading = false;
  errorMessage: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['movieId'] && this.movieId) {
      this.fetchRecommendations();
    }
  }

  fetchRecommendations() {
    this.isLoading = true;
    this.errorMessage = null;

    this.http
      .get<any[]>(`http://localhost:4000/api/movies/${this.movieId}/recommendations`)
      .subscribe({
        next: (data) => {
          this.recommendations = data;
          this.isLoading = false;
        },
        error: (err) => {
          console.error('Error fetching recommendations:', err);
          this.errorMessage = 'Failed to load recommendations.';
          this.isLoading = false;
        }
      });
  }
}
