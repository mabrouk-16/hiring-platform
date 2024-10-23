import { Routes } from '@angular/router';
import { HomeComponent } from './landing page/home/home.component';
import { AnalyticsComponent } from './landing page/analytics/analytics.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'analytics',
    component: AnalyticsComponent,
  },
];
