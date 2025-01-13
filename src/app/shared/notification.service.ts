import { HttpClient } from '@angular/common/http';
import {
  Inject,
  Injectable,
  PLATFORM_ID,
  signal,
  WritableSignal,
} from '@angular/core';
import {
  Observable,
  Subject,
  Subscription,
  finalize,
  map,
  pipe,
  startWith,
} from 'rxjs';

import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

export interface NotificationResponse {
  content: Notification[];
}

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  notifications: WritableSignal<Notification[]> = signal([]);
  size = signal(20);
  page = signal(0);
  totalPages = signal(0);
  isLoading = signal(false);
  totalUnSeen = signal(0);
  userSubscription!: Subject<boolean>;
  subscription!: Subscription;
  messagesSubscription: Subscription = new Subscription();
  token!: string | null;
  constructor(
    private http: HttpClient,
    public afMessaging: AngularFireMessaging,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    let isBrowser = isPlatformBrowser(platformId);
    if (isBrowser) {
      this.requestPermission();
      this.getNotifications();
    }
  }

  getNotifications() {
    this.isLoading.set(true);
    const params = new URLSearchParams();
    params.append('size', this.size().toString());
    params.append('page', this.page().toString());
    // this.userNotifications(params.toString())
    //   .pipe(
    //     finalize(() => this.isLoading.set(false)),
    //     map((res) => {
    //       res.content?.forEach((notification) => {
    //         if (!notification.seen) {
    //           this.totalUnSeen.update((v) => v + 1);
    //         }
    //         notification =
    //           this.removePerformerNameFromDescription(notification);
    //         if (notification.post) {
    //           notification.image = notification?.image;
    //         } else if (notification?.performer?.picture) {
    //           notification.image = notification.performer.picture;
    //         }
    //       });
    //       return res;
    //     })
    //   )
    // .subscribe((res) => {
    //   let oldTarget = document.querySelector(
    //     `#notification-card${this.notifications()?.length - 1}`
    //   );
    //   this.notifications.update((item) => [...item, ...res.content]);
    //   this.totalPages.set(res.totalPages || 0);
    //   let clear = setInterval(() => {
    //     let newTarget = document.querySelector(
    //       `#notification-card${this.notifications()?.length - 1}`
    //     );
    //     if (oldTarget) {
    //       this.scrollService.setObserver()?.unobserve(oldTarget);
    //     }
    //     if (newTarget) {
    //       clearInterval(clear);
    //       this.scrollService.setObserver()?.observe(newTarget);
    //     }
    //   }, 2000);
    // });
  }
  requestPermission() {
    this.listen();
    this.afMessaging.requestToken.subscribe({
      next: (token) => {
        if (token) {
          this.token = token;
          console.log(token);
          // this.registerNotificationTokens(this.token).subscribe((res) => {
          // });
        }
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
  listen() {
    this.messagesSubscription.add(
      this.afMessaging.messages.subscribe((message) => {
        if (!('Notification' in window)) {
          console.log('Web Notification not supported');
        } else {
          Notification.requestPermission().then((permission) => {
            var notification = new Notification(message.notification?.title!, {
              body: message.notification?.body,
              icon: 'assets/images/icon.png',
              dir: 'auto',
            });
            // Handle notification click
            notification.onclick = () => {
              // Navigate to the notifications page
              this.router.navigate(['/']);
              // Optionally, you can close the notification after navigation
              notification.close();
            };

            setTimeout(function () {
              notification.close();
            }, 9000);
          });
        }
        setTimeout(() => {
          this.page.set(0);
          this.notifications.set([]);
          this.getNotifications();
        }, 100);
      })
    );
  }

  deregisterNotificationTokens() {
    // this.deleteNotificationTokens(this.token!).subscribe((res) => {
    //   this.token = null;
    // });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.messagesSubscription.unsubscribe();
  }
  // userNotifications(params: string): Observable<NotificationResponse> {
  //   return this.http.get<NotificationResponse>(
  //     `api/v2/user/notifications?${params}`
  //   );
  // }
  // registerNotificationTokens(token: string): Observable<NotificationResponse> {
  //   return this.http.post<NotificationResponse>(
  //     `api/v2/user/device/register-token?token=${token}`,
  //     {}
  //   );
  // }
  // deleteNotificationTokens(token: string): Observable<NotificationResponse> {
  //   return this.http.delete<NotificationResponse>(
  //     `api/v2/user/device/deregister-token?token=${token}`
  //   );
  // }
}
