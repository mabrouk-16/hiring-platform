import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-right-side',
  standalone: true,
  templateUrl: './right-side.component.html',
  styleUrls: ['./right-side.component.css'],
})
export class RightSideComponent {
  userService = inject(UserService);
  constructor() {}
}
