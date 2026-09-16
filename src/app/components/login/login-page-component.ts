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
  onLogin(data: { usuario: string; senha: string }) {
    console.log('Login enviado', data);
  }
}