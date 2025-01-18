import { Component, Inject, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { WebNavComponent } from './web-nav/web-nav.component';
import { LeftSideComponent } from './left-side/left-side.component';
import { RouterOutlet } from '@angular/router';
import { NotificationService } from '../shared/notification.service';
import { isPlatformBrowser } from '@angular/common';
import { AuthApiService } from '../services/auth-api.service';
import { UserService } from '../services/user.service';
import { Analytics } from '@angular/fire/analytics';
import { Auth } from '@angular/fire/auth';
import { of } from 'rxjs';

@Component({
  selector: 'app-web-app',
  standalone: true,
  templateUrl: './web-app.component.html',
  imports: [WebNavComponent, RouterOutlet],
  styleUrls: ['./web-app.component.css'],
})
export class WebAppComponent {
  // public notification = inject(NotificationService);
  // auth = inject(Auth);
  analytics = inject(Analytics);
  private authApi = inject(AuthApiService);
  public userService = inject(UserService);

  ngOnInit(): void {
    this.authApi.user$.subscribe((user) => {
      if (user) {
        this.userService.setUserFromFB(user.uid)
      } else this.authApi.currentUser$.pipe(() => of(null));
    });
  }

  // constructor(@Inject(PLATFORM_ID) private platformId: Object) {
  //   let isBrowser = isPlatformBrowser(platformId);
  //   if (isBrowser) {
  //   }
  // }
}
