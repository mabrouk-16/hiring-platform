import { Component } from '@angular/core';
import { NavHeaderComponent } from "./header/nav-header/nav-header.component";
import { FooterComponent } from "./footer/footer.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavHeaderComponent, FooterComponent,RouterOutlet],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
})
export class LandingComponent {}
