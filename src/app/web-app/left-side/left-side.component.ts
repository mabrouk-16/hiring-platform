import { Component, inject, OnInit } from '@angular/core';
import { Component, inject, OnInit } from '@angular/core';
import { RightSideComponent } from '../right-side/right-side.component';
import { FeedComponent } from '../feed/feed.component';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-left-side',
  standalone: true,
  imports: [RightSideComponent, FeedComponent],
  templateUrl: './left-side.component.html',
  styleUrls: ['./left-side.component.css'],
})
export class LeftSideComponent implements OnInit {
  public userService = inject(UserService);
  constructor() {}

  ngOnInit() {}
}
