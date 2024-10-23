import { Component, OnInit } from '@angular/core';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { FinanceChartComponent } from './charts/finance-chart/finance-chart.component';
import { ProjectsPieChartComponent } from './charts/projects-pie-chart/projects-pie-chart.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [
    BarChartComponent,
    FinanceChartComponent,
    ProjectsPieChartComponent,
    PieChartComponent,
  ],
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css'],
})
export class AnalyticsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
