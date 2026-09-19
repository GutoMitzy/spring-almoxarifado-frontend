import { Component, inject } from '@angular/core';
import { DeliveryInfo } from '../delivery-info/delivery-info';
import { EntradaEstoqueService } from '../../../../services/entrada-estoque/entrada-estoque-service';

@Component({
  imports: [DeliveryInfo],
  selector: 'app-deliveries-card',
  styleUrl: './deliveries-card.css',
  templateUrl: './deliveries-card.html',
})
export class DeliveriesCard {
  readonly entradaEstoqueService = inject(EntradaEstoqueService)

  readonly pageSize = this.entradaEstoqueService.pageSize;
  readonly totalPages = this.entradaEstoqueService.totalPages$;
  readonly totalEntradas = this.entradaEstoqueService.totalEntradas$;
  readonly entradas = this.entradaEstoqueService.entradas$;

  currentPage = 0;

  ngOnInit(): void {
    this.getEntradasEstoque();
  }

  getEntradasEstoque(): void {
    this.entradaEstoqueService.getEntradasEstoque(this.currentPage, this.pageSize).subscribe();
  }
}
