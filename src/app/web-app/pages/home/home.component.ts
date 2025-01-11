import { Component, OnInit } from '@angular/core';
import { LeftSideComponent } from "../../left-side/left-side.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LeftSideComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomePageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
