import { Component, inject } from '@angular/core';
import { UserService } from '../../../../../services/user.service';
import { ProfileService } from '../../services/profile.service';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-links-edit',
  standalone: true,
  imports: [FormsModule, MatDialogModule],
  templateUrl: './links-edit.component.html',
  styleUrl: '../edit-profile/edit-profile.component.scss',
})
export class LinksEditComponent {
  public userService = inject(UserService);
  public profileService = inject(ProfileService);

  links? = this.userService.user()?.links;

  changeMainInfo() {
    console.log(this.links);
    let body = {
      links: this.links,
    };
    this.profileService.updateProfileInfo(body);
  }
}
