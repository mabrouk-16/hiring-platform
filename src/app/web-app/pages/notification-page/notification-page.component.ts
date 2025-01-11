import { Component, OnInit } from '@angular/core';
import { NotificationFeedComponent } from './component/notification-feed/notification-feed.component';

@Component({
  selector: 'app-notification-page',
  standalone: true,
  imports: [NotificationFeedComponent],
  templateUrl: './notification-page.component.html',
  styleUrls: ['./notification-page.component.css'],
})
export class NotificationPageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
