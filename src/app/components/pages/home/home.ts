import { Component } from '@angular/core';
import { ContentOverview } from './home-content/home-content';
import { AuthService } from '../../../services/auth/auth-service';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { GeneralStatistics } from './general-statistics/general-statistics';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ContentOverview, GeneralStatistics],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  searchTerm = '';

  updateSearch(searchTerm: string): void {
    this.searchTerm = searchTerm;
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}