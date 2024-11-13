import { Component, OnInit } from '@angular/core';
import { WebNavComponent } from './web-nav/web-nav.component';
import { LeftSideComponent } from "./left-side/left-side.component";

@Component({
  selector: 'app-web-app',
  standalone: true,
  templateUrl: './web-app.component.html',
  imports: [WebNavComponent, LeftSideComponent],
  styleUrls: ['./web-app.component.css'],
})
export class WebAppComponent {
  constructor() {}
}
