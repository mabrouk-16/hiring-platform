import { Component, OnInit } from '@angular/core';
import { RightSideComponent } from '../right-side/right-side.component';
import { FeedComponent } from '../feed/feed.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-left-side',
  standalone: true,
  imports: [RightSideComponent, FeedComponent, RouterOutlet],
  templateUrl: './left-side.component.html',
  styleUrls: ['./left-side.component.css'],
})
export class LeftSideComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
