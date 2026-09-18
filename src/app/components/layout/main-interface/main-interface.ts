import { Component, inject } from '@angular/core';
import { Header } from './header/header';
import { NavigationBar } from './navigation-bar/navigation-bar';
import { UserProfile } from './user-profile/user-profile';
import { Router, RouterOutlet } from '@angular/router'
import { AuthService } from '../../../services/auth/auth-service'

@Component({
  imports: [Header, NavigationBar, UserProfile, RouterOutlet],
  selector: 'app-main-interface',
  styleUrl: './main-interface.css',
  templateUrl: './main-interface.html',
})
export class MainInterface {
  private readonly router = inject(Router);
  activeSection = 'Estoque';
  searchTerm = '';

  selectSection(section: string): void {
    this.activeSection = section;

    if(section === 'home') {
      this.router.navigate(['/home']);
      return;
    }

    this.router.navigate(["/home", section]);
  }

  updateSearch(searchTerm: string): void {
    this.searchTerm = searchTerm;
  }
}
