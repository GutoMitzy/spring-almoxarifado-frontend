import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Storage } from '../../services/storage';

@Component({
  imports: [FormsModule],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  _storageService = inject(Storage);
}
