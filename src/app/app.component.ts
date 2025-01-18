import { Component, inject } from '@angular/core';
import { Analytics } from '@angular/fire/analytics';
import { Auth } from '@angular/fire/auth';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent {

}
