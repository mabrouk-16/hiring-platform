import { Component, Inject, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { WebNavComponent } from './web-nav/web-nav.component';
import { LeftSideComponent } from './left-side/left-side.component';
import { RouterOutlet } from '@angular/router';
import { NotificationService } from '../shared/notification.service';
import { isPlatformBrowser } from '@angular/common';
import { AuthApiService } from '../services/auth-api.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-web-app',
  standalone: true,
  templateUrl: './web-app.component.html',
  imports: [WebNavComponent, RouterOutlet],
  styleUrls: ['./web-app.component.css'],
})
export class WebAppComponent {
  // public notification = inject(NotificationService);
  private auth = inject(AuthApiService);
  public userService = inject(UserService);

  ngOnInit(): void {
    this.auth.user$.subscribe((user) => {
      if (user) {
        this.userService.user.set({
          email: user.email,
          _id: user.uid,
          userName: user.displayName,
        });
      } else this.auth.currentUser.set(null);
    });
  }

  // constructor(@Inject(PLATFORM_ID) private platformId: Object) {
  //   let isBrowser = isPlatformBrowser(platformId);
  //   if (isBrowser) {
  //   }
  // }
}
