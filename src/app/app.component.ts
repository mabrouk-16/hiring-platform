import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LeftSideComponent } from "./web-app/left-side/left-side.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LeftSideComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
}
