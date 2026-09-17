import { Component } from '@angular/core';
import { DeliveriesCard } from '../deliveries-card/deliveries-card';
import { FilterCard } from '../filter-card/filter-card';

@Component({
  imports: [FilterCard, DeliveriesCard],
  selector: 'app-delivery-content',
  styleUrl: './delivery-content.css',
  templateUrl: './delivery-content.html',
})
export class DeliveryContent {}
