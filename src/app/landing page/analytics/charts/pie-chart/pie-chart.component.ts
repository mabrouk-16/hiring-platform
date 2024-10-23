import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-pie-chart',
  standalone: true,
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css'],
})
export class PieChartComponent implements OnInit {
  public chart: any;

  constructor() {}

  ngOnInit() {
    this.createChart();
  }
  createChart() {
    let delayed: any;
    this.chart = new Chart('PieChart', {
      type: 'pie',
      data: {
        labels: [
          'Under Graduated',
          'Graduated ',
          'Junior',
          'Mid-level',
          'Senior',
          'Higher Postion',
        ],
        datasets: [
          {
            label: 'position',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
            backgroundColor: [
              '#CB4335',
              '#1F618D',
              '#F1C40F',
              '#27AE60',
              '#884EA0',
              '#D35400',
            ],
          },
        ],
      },
      options: {
        aspectRatio: 2.5,

        animation: {
          onComplete: () => {
            delayed = true;
          },
          delay: (context) => {
            let delay = 0;
            if (
              context.type === 'data' &&
              context.mode === 'default' &&
              !delayed
            ) {
              delay = context.dataIndex * 700 + context.datasetIndex * 300;
            }
            return delay;
          },
        },
      },
    });
  }
}
