import { Component } from '@angular/core';
import { DeliveryInfo } from '../delivery-info/delivery-info';

@Component({
  imports: [DeliveryInfo],
  selector: 'app-deliveries-card',
  styleUrl: './deliveries-card.css',
  templateUrl: './deliveries-card.html',
})
export class DeliveriesCard {}
