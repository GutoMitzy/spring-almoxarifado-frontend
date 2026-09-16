import { Component, Input, inject } from '@angular/core';
import { ItemInfo } from '../item-info/item-info';
import { ItemService, IItem, IPage } from '../../../services/item/item-service';
import { AuthService } from '../../../services/auth-request/auth-service';

@Component({
  standalone: true,
  imports: [ItemInfo],
  selector: 'app-content-overview',
  styleUrl: './content-overview.css',
  templateUrl: './content-overview.html',
})
export class ContentOverview {
  private readonly itemService = inject(ItemService);
  private readonly authService = inject(AuthService);

  @Input() searchTerm = '';

  readonly pageSize = 8;
  currentPage = 0;
  filterOpen = false;
  totalPages = 1;
  
  activeFilter: IItem['categoriaNome'] | 'Todos' = 'Todos';

  items: IItem[] = [];

  ngOnInit(): void {
    this.itemService.getAllItems(this.currentPage, this.pageSize).subscribe((data) => {
      this.items = data.content;
      this.totalPages = data.totalPages;
    });
  }

}
