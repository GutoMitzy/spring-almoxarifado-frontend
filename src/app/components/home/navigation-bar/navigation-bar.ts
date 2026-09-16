import { Component, EventEmitter, Output } from '@angular/core';

interface NavigationItem {
  label: string;
  icon: string;
  badge?: number;
}

@Component({
  standalone: true,
  selector: 'app-navigation-bar',
  styleUrl: './navigation-bar.css',
  templateUrl: './navigation-bar.html',
})
export class NavigationBar {
  @Output() readonly sectionSelected = new EventEmitter<string>();

  readonly items: NavigationItem[] = [
    { label: 'Estoque', icon: '▣' },
    { label: 'Entregas', icon: '▱' },
    { label: 'Notificações', icon: '♧', badge: 3 },
    { label: 'Configurações', icon: '⚙' },
  ];

  activeSection = 'Estoque';

  selectSection(label: string): void {
    this.activeSection = label;
    this.sectionSelected.emit(label);
  }
}
