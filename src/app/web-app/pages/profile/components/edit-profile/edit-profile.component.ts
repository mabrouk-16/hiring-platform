import { Component, inject, signal } from '@angular/core';
import { UserService } from '../../../../../services/user.service';
import { CloudinaryModule } from '@cloudinary/ng';
import { environment } from '../../../../../../environment';
import { ProfileService } from '../../services/profile.service';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { finalize } from 'rxjs';
@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [
    CloudinaryModule,
    FormsModule,
    MatDialogModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.scss',
})
export class EditProfileComponent {
  public userService = inject(UserService);
  public profileService = inject(ProfileService);

  imgLoading = signal(false);

  imgUrl!: string;
  userName!: string;
  bio!: string;

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
          this.imgUrl = imageData.url;
          this.profileService.updateProfileImageByFB(imageData.url);
        });
    }
  }
  changeMainInfo() {
    console.log(this.userName);
    console.log(this.bio);
    let body = {
      userName: this.userName,
      bio: this.bio,
    };
    this.profileService.updateProfileInfo(body);
  }
}
