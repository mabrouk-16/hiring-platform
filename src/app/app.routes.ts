import { Routes } from '@angular/router';
import { HomeComponent } from './landing page/home/home.component';
import { AnalyticsComponent } from './landing page/analytics/analytics.component';
import { AboutUsComponent } from './landing page/about-us/about-us.component';
import { LandingComponent } from './landing page/landing.component';
import { AppComponent } from './app.component';
import { WebAppComponent } from './web-app/web-app.component';
import { NetworkComponent } from './web-app/pages/my network/network/network.component';
import { HomePageComponent } from './web-app/pages/home/home.component';
import { NotificationPageComponent } from './web-app/pages/notification-page/notification-page.component';
import { authGuard } from './shared/auth.guard';
export const routes: Routes = [
  { path: '', redirectTo: 'app', pathMatch: 'full' },
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'app',
        component: WebAppComponent,
        children: [
          { path: '', component: HomePageComponent },
          {
            path: 'network',
            component: NetworkComponent,
            canActivate: [authGuard],
          },
          {
            path: 'notification',
            component: NotificationPageComponent,
            canActivate: [authGuard],
          },
        ],
      },

      {
        path: 'landing',
        component: LandingComponent,
        children: [
          { path: '', component: HomeComponent },
          { path: 'analytics', component: AnalyticsComponent },
          { path: 'about', component: AboutUsComponent },
        ],
      },
    ],
  },
];
