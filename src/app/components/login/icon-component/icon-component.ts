import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  standalone: true,
  template: `
    <svg [attr.aria-label]="ariaLabel" [attr.role]="role" viewBox="0 0 24 24">
      <path [attr.d]="iconPath"></path>
    </svg>
  `,
  styleUrls: ['./icon-component.css'],
})
export class IconComponent {
  @Input() name = 'warehouse';
  @Input() ariaLabel = '';
  @Input() role = 'img';

  private readonly icons: Record<string, string> = {
    warehouse: 'M3 8.5 12 3l9 5.5v9.5L12 23l-9-5V8.5Zm2 1.4v6.4l7 4.3 7-4.3V9.9L12 14.2 5 9.9Zm7-5.1 6.3 3.8L12 11.4 5.7 7.1 12 4.8Z',
    user: 'M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm0 2c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5Z',
    lock: 'M18 10h-1V8a5 5 0 0 0-10 0v2H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2Zm-6 7a2 2 0 1 1 2-2 2 2 0 0 1-2 2Zm3-7H9V8a3 3 0 0 1 6 0v2Z',
    eye: 'M12 5a11.2 11.2 0 0 1 10 7 11.2 11.2 0 0 1-10 7 11.2 11.2 0 0 1-10-7 11.2 11.2 0 0 1 10-7Zm0 2a9.2 9.2 0 0 0-8.2 5A9.2 9.2 0 0 0 12 17a9.2 9.2 0 0 0 8.2-5A9.2 9.2 0 0 0 12 7Zm0 2.5A3.5 3.5 0 1 1 8.5 13 3.5 3.5 0 0 1 12 9.5Z',
    'eye-off': 'M3 3l18 18M9.88 9.88A3.5 3.5 0 0 0 14.12 14.12M12 5a11.2 11.2 0 0 1 10 7 11.2 11.2 0 0 1-3.8 4.59M5.31 5.31A11.2 11.2 0 0 0 2 12a11.2 11.2 0 0 0 10 7 11.2 11.2 0 0 0 6.59-2.2',
  };

  get iconPath(): string {
    const normalized = this.icons as Record<string, string>;
    return normalized[this.name] ?? normalized['warehouse'];
  }
}