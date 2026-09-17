import { Component } from '@angular/core';
import { ContentOverview } from './content-overview/content-overview';
import { Header } from './header/header';
import { NavigationBar } from './navigation-bar/navigation-bar';
import { UserProfile } from './user-profile/user-profile';
import { AuthService } from '../../services/auth/auth-service';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { GeneralStatistics } from './general-statistics/general-statistics';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ContentOverview, GeneralStatistics, Header, NavigationBar, UserProfile],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  searchTerm = '';
  activeSection = 'Estoque';

  updateSearch(searchTerm: string): void {
    this.searchTerm = searchTerm;
  }

  selectSection(section: string): void {
    this.activeSection = section;
  }
  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}