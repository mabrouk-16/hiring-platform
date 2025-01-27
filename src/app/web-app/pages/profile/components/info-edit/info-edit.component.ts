import { Component, inject, viewChild } from '@angular/core';
import { UserService } from '../../../../../services/user.service';
import { ProfileService } from '../../services/profile.service';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { SnackbarService } from '../../../../../shared/snack.service';

@Component({
  selector: 'app-info-edit',
  standalone: true,
  imports: [FormsModule, MatDialogModule],
  templateUrl: './info-edit.component.html',
  styleUrl: '../edit-profile/edit-profile.component.scss',
})
export class InfoEditComponent {
  public userService = inject(UserService);
  public profileService = inject(ProfileService);

  bio?: string = this.userService.user()?.bio;
  birthDate?: string = this.userService.user()?.birthDate;
  phone?: string = this.userService.user()?.phone;

  changeMainInfo() {
    console.log(this.bio);
    let body = {
      bio: this.bio,
      birthDate: this.birthDate,
      phone: this.phone,
    };
    this.profileService.updateProfileInfo(body);

  }
}
