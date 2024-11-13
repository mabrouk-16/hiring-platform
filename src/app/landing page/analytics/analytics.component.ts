import { Component, OnInit } from '@angular/core';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { FinanceChartComponent } from './charts/finance-chart/finance-chart.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [
    BarChartComponent,
    FinanceChartComponent,
    PieChartComponent,
  ],
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css'],
})
export class AnalyticsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
