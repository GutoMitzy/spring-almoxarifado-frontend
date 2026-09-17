import { Component, inject, Signal, signal} from '@angular/core';
import { ItemService } from '../../../services/item/item-service';

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
  readonly totalItensBaixa = signal(0);
  readonly totalEntradasRecentes = signal(0);
  readonly totalSaidasRecentes = signal(0);

  readonly statistics: Statistic[] = [
    { label: 'Total de Itens', value: this.totalItems, unit: 'IDs', icon: '▣', tone: 'teal' },
    { label: 'Itens em Baixa', value: this.totalItensBaixa, unit: 'Alertas', icon: '△', tone: 'amber' },
    { label: 'Entradas Recentes', value: this.totalEntradasRecentes, unit: 'Hoje', icon: '+', tone: 'blue' },
    { label: 'Saídas Recentes', value: this.totalSaidasRecentes, unit: 'Hoje', icon: '−', tone: 'teal' },
  ];
}
