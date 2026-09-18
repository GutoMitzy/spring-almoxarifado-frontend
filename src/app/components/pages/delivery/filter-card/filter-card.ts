import { Component } from '@angular/core';
import { FilterInputs } from '../filter-inputs/filter-inputs';

@Component({
  imports: [FilterInputs],
  selector: 'app-filter-card',
  styleUrl: './filter-card.css',
  templateUrl: './filter-card.html',
})
export class FilterCard {}
