import { Component } from '@angular/core';
import { DeliveriesCard } from './deliveries-card/deliveries-card';
import { FilterCard } from './filter-card/filter-card';

@Component({
  imports: [FilterCard, DeliveriesCard],
  selector: 'app-delivery',
  styleUrl: './delivery.css',
  templateUrl: './delivery.html',
})
export class Delivery {}
