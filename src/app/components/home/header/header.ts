import { Component, EventEmitter, Output, inject, signal } from '@angular/core';
import { HealthService } from '../../../services/health/health-service';

@Component({
  standalone: true,
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  @Output() readonly searchChanged = new EventEmitter<string>();
  private readonly healthService = inject(HealthService);

  searchTerm = '';
  status: string = 'Offline';
  classStatus = signal('offline-status');

  updateSearch(value: string): void {
    this.searchTerm = value;
    this.searchChanged.emit(value);
  }

  ngOnInit(): void {
    this.healthService.getHealth().subscribe({
      next: (isHealthy) => {
        if (isHealthy) {
          this.status = 'Online';
          this.classStatus.set('online-status');
        }
      },
      error: () => {
        this.status = 'Offline';
        this.classStatus.set('offline-status');
      },
    });
  }
}
