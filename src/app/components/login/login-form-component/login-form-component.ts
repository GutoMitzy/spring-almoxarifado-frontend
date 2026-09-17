import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PasswordInputComponent } from '../password-input-component/password-input-component';
import { AuthService } from '../../../services/auth/auth-service';
import { IconComponent } from '../icon-component/icon-component';

@Component({
  selector: 'app-login-form',
  standalone: true,
  templateUrl: './login-form-component.html',
  styleUrl: './login-form-component.css',
  imports: [ReactiveFormsModule, PasswordInputComponent, IconComponent],
})
export class LoginFormComponent {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  loginForm = new FormGroup({
      usuario: new FormControl('', {
        validators: [Validators.required],
        nonNullable: true,
      }),
      senha: new FormControl('', {
        validators: [Validators.required],
        nonNullable: true,
      }),
    });

  submit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    } 

    const { usuario, senha } = this.loginForm.getRawValue();

    this.authService.postLogin(usuario, senha).subscribe({
      next: (response) => {
        this.authService.setToken(response.token);
        this.router.navigate(['/home']);
      },
      error: (error) => {
        console.error('Login failed:', error);
      }
    });
  }
}