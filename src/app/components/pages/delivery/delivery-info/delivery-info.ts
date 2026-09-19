import { Component, Input } from '@angular/core';
import { IEntradaEstoque } from '../../../../services/entrada-estoque/entrada-estoque-service';

@Component({
  imports: [],
  selector: 'app-delivery-info',
  styleUrl: './delivery-info.css',
  templateUrl: './delivery-info.html',
})
export class DeliveryInfo {
  @Input({ required: true }) entrada!: IEntradaEstoque;

  get deliveryIcon(): string {
    switch (this.entrada.status) {
        case 'PENDENTE':
            return 'local_shipping';
        case 'RECEBIDO':
            return 'check_circle';
        case 'ATRASADO':
            return 'warning';
        case 'CANCELADO':
            return 'cancel';
        default:
            return 'inventory_2';
    }
  }

  get deliveryStatusStyle(): string {
    switch (this.entrada.status) {
    case 'PENDENTE':
        return 'transit';
    case 'RECEBIDO':
        return 'received';
    case 'ATRASADO':
        return 'late';
    case 'CANCELADO':
        return 'cancelled';
    default:
        return 'transit';
    }
  }
}