import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  @Output() readonly searchChanged = new EventEmitter<string>();

  searchTerm = '';

  updateSearch(value: string): void {
    this.searchTerm = value;
    this.searchChanged.emit(value);
  }
}
