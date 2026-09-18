import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-user-profile',
  styleUrl: './user-profile.css',
  templateUrl: './user-profile.html',
})
export class UserProfile {
  userName: string = 'Carlos Oliveira';
  userRole: string = 'Almoxarife Líder';

  
}
