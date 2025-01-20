import { Component, inject } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Router, RouterModule } from '@angular/router';
import { RightSideComponent } from '../../right-side/right-side.component';
import { SlicePipe } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterModule, RightSideComponent, SlicePipe, MatButton],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  public userService = inject(UserService);
  private dialog = inject(MatDialog);
  private router = inject(Router);

  editProfile() {
    this.router.navigate([], {
      fragment: 'general',
    });
    this.dialog.open(EditProfileComponent, {
      panelClass: '',
      width: '660px',
    });
  }

  posts = [
    {
      userImage: 'assets/web_images/user-3.png',
      name: 'Bejamin Leo',
      title: 'Founder and CEO at Giva | Angel Investor',
      time: '2 hours ago ',
      body: ' The success of every website depends on Search engine optimisation and digital marketing strategy. If you are not in the first page of all major search engines then you are ahead among your competitors.',
      thumbnail: 'assets/web_images/post-image-1.png',
      likedUsers: 'Adam Doe and 89 others',
      comments: '22',
      shares: '40',
    },
    {
      userImage: 'assets/web_images/user-4.png',
      name: 'Claire Smith',
      title: 'SDE at Swiggy | Solopreneur',
      time: '2 hours ago ',
      body: ' The success of every website depends on Search engine optimisation and digital marketing strategy. If you are not in the first page of all major search engines then you are ahead among your competitors.',
      thumbnail: 'assets/web_images/post-image-2.png',
      likedUsers: 'Adam Doe and 89 others',
      comments: '312',
      shares: '23',
    },
    {
      userImage: 'assets/web_images/user-3.png',
      name: 'Bejamin Leo',
      title: 'Founder and CEO at Giva | Angel Investor',
      time: '2 hours ago ',
      body: ' The success of every website depends on Search engine optimisation and digital marketing strategy. If you are not in the first page of all major search engines then you are ahead among your competitors.',
      thumbnail: 'assets/web_images/post-image-3.png',
      likedUsers: 'Adam Doe and 9 others',
      comments: '21',
      shares: '4',
    },
  ];
}
