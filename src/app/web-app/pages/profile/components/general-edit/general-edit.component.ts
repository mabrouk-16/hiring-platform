import { Component, inject, signal } from '@angular/core';
import { UserService } from '../../../../../services/user.service';
import { ProfileService } from '../../services/profile.service';
import { CloudinaryModule } from '@cloudinary/ng';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';
import { finalize } from 'rxjs';
import { environment } from '../../../../../../environment';

@Component({
  selector: 'app-general-edit',
  standalone: true,
  imports: [
    CloudinaryModule,
    FormsModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    RouterModule,
  ],
  templateUrl: './general-edit.component.html',
  styleUrl: '../edit-profile/edit-profile.component.scss',
})
export class GeneralEditComponent {
  public userService = inject(UserService);
  public profileService = inject(ProfileService);

  imgLoading = signal(false);
  coverLoading = signal(false);

  userName?: string = this.userService.user()?.userName;
  // bio?: string = this.userService.user()?.bio;
  title?: string = this.userService.user()?.title;

  changeImgFile(event: any) {
    this.imgLoading.set(true);
    const data = new FormData();
    const now = new Date().getMilliseconds();
    if (event?.target?.files) {
      data.append('file', event.target.files[0]);
      data.append('upload_preset', environment.cloudinaryConfig.uploadPresets);
      data.append('cloud_name', environment.cloudinaryConfig.CloudName);
      data.append('public_id', event.target.files[0].name + now);
      this.profileService
        .uploadImageToCloud(data)
        .pipe(finalize(() => this.imgLoading.set(false)))
        .subscribe((imageData) => {
          console.log(imageData);
          this.profileService.updateCoverImageByFB(imageData.url);
        });
    }
  }
  changeCoverImgFile(event: any) {
    this.coverLoading.set(true);
    const data = new FormData();
    const now = new Date().getMilliseconds();
    if (event?.target?.files) {
      data.append('file', event.target.files[0]);
      data.append('upload_preset', environment.cloudinaryConfig.uploadPresets);
      data.append('cloud_name', environment.cloudinaryConfig.CloudName);
      data.append('public_id', event.target.files[0].name + now);
      this.profileService
        .uploadImageToCloud(data)
        .pipe(finalize(() => this.coverLoading.set(false)))
        .subscribe((imageData) => {
          this.profileService.updateProfileImageByFB(imageData.url);
        });
    }
  }
  changeMainInfo() {
    console.log(this.userName);
    // console.log(this.bio);
    let body = {
      userName: this.userName,
      // bio: this.bio,
      title: this.title,
    };
    this.profileService.updateProfileInfo(body);
  }
}
