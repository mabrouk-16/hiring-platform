import { Component, OnInit } from '@angular/core';
import { ProfileCardComponent } from "./profile-card/profile-card.component";

@Component({
  selector: 'app-network',
  standalone: true,
  imports: [ProfileCardComponent],
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css'],
})
export class NetworkComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
