import { Component, inject, Signal, signal} from '@angular/core';
import { ItemService } from '../../../../services/item/item-service';

interface Statistic {
  label: string;
  value: Signal<number>;
  unit: string;
  icon: string;
  tone: string;
}

@Component({
  standalone: true,
  selector: 'app-general-statistics',
  styleUrl: './general-statistics.css',
  templateUrl: './general-statistics.html',
})
export class GeneralStatistics {
  private readonly itemService = inject(ItemService);

  readonly totalItems = this.itemService.totalItems$;
  readonly itensEmBaixa = this.itemService.itensEmBaixa$;
  readonly entradasRecentes = this.itemService.entradasRecentes$;
  readonly saidasRecentes = this.itemService.saidasRecentes$;

  readonly statistics: Statistic[] = [
    { label: 'Total de Itens', value: this.totalItems, unit: 'IDs', icon: '▣', tone: 'teal' },
    { label: 'Itens em Baixa', value: this.itensEmBaixa, unit: 'Alertas', icon: '△', tone: 'amber' },
    { label: 'Entradas Recentes', value: this.entradasRecentes, unit: 'Hoje', icon: '+', tone: 'blue' },
    { label: 'Saídas Recentes', value: this.saidasRecentes, unit: 'Hoje', icon: '−', tone: 'teal' },
  ];

  ngOnInit(): void {
    this.itemService.getStatistics().subscribe();
  }
}
