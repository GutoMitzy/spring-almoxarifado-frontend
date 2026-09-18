import { Component, Input, inject, signal } from '@angular/core';
import { ItemService, IItem, IPage } from '../../../../services/item/item-service';
import { AuthService } from '../../../../services/auth/auth-service';
import { ItemInfo } from '../item-info/item-info';

@Component({
  standalone: true,
  imports: [ItemInfo],
  selector: 'app-home-content',
  styleUrl: './home-content.css',
  templateUrl: './home-content.html',
})
export class ContentOverview {
  readonly itemService = inject(ItemService);
  private readonly authService = inject(AuthService);

  @Input() searchTerm = '';

  readonly pageSize = this.itemService.pageSize;
  readonly totalPages = this.itemService.totalPages$;
  readonly totalItems = this.itemService.totalItems$;
  readonly items = this.itemService.items$;

  currentPage = 0;
  filterOpen = false;
  activeFilter: IItem['categoria'] | 'Todos' = 'Todos';

  get showedPages(): number[] {
    return Array.from({ length: this.totalPages() }, (_, i) => i);
  }

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.itemService.getAllItems(this.currentPage, this.pageSize).subscribe();
  }
  
  nextPage(): void {
    if (this.currentPage < this.totalPages()) {
      this.currentPage++;
      this.getItems();
    }
  }

  prevPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.getItems();
    }
  }

  changePage(page: number): void {
    this.currentPage = page;
    this.getItems();
  }

}
