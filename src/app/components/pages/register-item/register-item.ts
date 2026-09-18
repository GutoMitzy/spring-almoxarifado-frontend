import { Component, inject } from '@angular/core';
import { Router } from '@angular/router' 

@Component({
  imports: [],
  selector: 'app-register-item',
  styleUrl: './register-item.css',
  templateUrl: './register-item.html',
})
export class RegisterItem {
  readonly router = inject(Router);

  returnToRoute(): void {
    this.router.navigate(['home'], {});
  }
}
