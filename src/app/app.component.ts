import { Component } from '@angular/core';
import { NavHeaderComponent } from './landing page/header/nav-header/nav-header.component';
import { HomeComponent } from './landing page/home/home.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavHeaderComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
