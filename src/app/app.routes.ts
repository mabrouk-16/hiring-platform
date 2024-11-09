import { Routes } from '@angular/router';
import { HomeComponent } from './landing page/home/home.component';
import { AnalyticsComponent } from './landing page/analytics/analytics.component';
import { AboutUsComponent } from './landing page/about-us/about-us.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'analytics',
    component: AnalyticsComponent,
  },
  {
    path: 'about',
    component: AboutUsComponent,
  },
];
