import { Component, EventEmitter, Output } from '@angular/core';

interface NavigationItem {
  label: string;
  path: string;
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
    { label: 'Estoque', path: "home", icon: '▣' },
    { label: 'Entregas', path: "deliveries", icon: '▱' },
    { label: 'Notificações', path: "notifications", icon: '♧', badge: 3 },
    { label: 'Empresas', path: "companies", icon: '🖳' },
    { label: 'Configurações', path: "configurations", icon: '⚙' },
  ];

  activeSection = 'Estoque';

  selectSection(label: string, path: string): void {
    this.activeSection = label;
    this.sectionSelected.emit(path);
  }
}
