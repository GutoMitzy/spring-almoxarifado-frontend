import { Component } from '@angular/core';

interface Statistic {
  label: string;
  value: string;
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
  readonly statistics: Statistic[] = [
    { label: 'Total de Itens', value: '1.240', unit: 'IDs', icon: '▣', tone: 'teal' },
    { label: 'Itens em Baixa', value: '14', unit: 'Alertas', icon: '△', tone: 'amber' },
    { label: 'Entradas Recentes', value: '+48', unit: 'Hoje', icon: '+', tone: 'blue' },
    { label: 'Saídas Recentes', value: '-32', unit: 'Hoje', icon: '−', tone: 'teal' },
  ];
}
