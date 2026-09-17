import { Component } from '@angular/core';
import { LoginFormComponent } from '../login/login-form-component/login-form-component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  templateUrl: './login-page-component.html',
  styleUrl: './login-page-component.css',
  imports: [LoginFormComponent, LoginFormComponent],
})
export class LoginPageComponent {
  iconPath: string = 'M3 8.5 12 3l9 5.5v9.5L12 23l-9-5V8.5Zm2 1.4v6.4l7 4.3 7-4.3V9.9L12 14.2 5 9.9Zm7-5.1 6.3 3.8L12 11.4 5.7 7.1 12 4.8Z';
}