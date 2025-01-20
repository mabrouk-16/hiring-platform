import { Component, inject, signal } from '@angular/core';
import { UserService } from '../../../../../services/user.service';
import { CloudinaryModule } from '@cloudinary/ng';
import { ProfileService } from '../../services/profile.service';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router, RouterModule } from '@angular/router';
import { NgClass } from '@angular/common';
import { GeneralEditComponent } from '../general-edit/general-edit.component';

export enum SectionsFragment {
  general = 'general',
  forgetPass = 'forget-password',
  links = 'links',
  info = 'info',
  notifications = 'notifications',
  connection = 'connection',
}
@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [
    CloudinaryModule,
    FormsModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    RouterModule,
    NgClass,
    GeneralEditComponent,
  ],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.scss',
})
export class EditProfileComponent {
  public userService = inject(UserService);
  public profileService = inject(ProfileService);
  public router = inject(Router);

  section = signal(SectionsFragment.general);

  sectionsFragment = SectionsFragment;
  constructor() {}
}
