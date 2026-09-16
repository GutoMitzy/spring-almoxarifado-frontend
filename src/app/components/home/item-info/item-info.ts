import { Component, Input } from '@angular/core';
import { IItem } from '../../../services/item/item-service';

@Component({
  standalone: true,
  selector: 'app-item-info',
  styleUrl: './item-info.css',
  templateUrl: './item-info.html',
})
export class ItemInfo {
  @Input({ required: true }) item!: IItem;
}
