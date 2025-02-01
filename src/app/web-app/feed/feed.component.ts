import { Component, computed, inject, signal } from '@angular/core';
import { UserService } from '../../services/user.service';
import { RouterModule } from '@angular/router';
import { environment } from '../../../environment';
import { ProfileService } from '../pages/profile/services/profile.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';
import { Post } from '../pages/profile/User-Profile';
import { finalize } from 'rxjs';
import { PostService } from './post.service';
import { DatePipe } from '@angular/common';
import { SnackbarService } from '../../shared/snack.service';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [RouterModule, MatProgressSpinnerModule, FormsModule, DatePipe],
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent {
  public userService = inject(UserService);
  public profileService = inject(ProfileService);
  public postService = inject(PostService);
  private snack = inject(SnackbarService);

  allPosts = signal<Post[]>([]);
  isLoading = signal(false);
  imgLoading = signal(false);

  postId = computed(() => this.allPosts().length + 1);

  postThumb!: any;
  postBody: string = '';
  arr = [1, 2, 3];

  constructor() {
    this.getAllPosts();
  }
  getAllPosts() {
    this.isLoading.set(true);
    this.postService
      .getAllPosts()
      .pipe(finalize(() => this.isLoading.set(false)))
      .subscribe((res) => {
        this.allPosts.set([]);
        res.forEach((doc) => {
          this.allPosts.update((posts) => {
            posts.unshift(doc.data());
            return posts;
          });
        });
      });
  }
  changeImgFile(event: any) {
    this.imgLoading.set(true);
    const data = new FormData();
    const now = new Date().getMilliseconds();
    if (event?.target?.files) {
      data.append('file', event.target.files[0]);
      data.append('upload_preset', environment.cloudinaryConfig.uploadPresets);
      data.append('cloud_name', environment.cloudinaryConfig.CloudName);
      data.append('public_id', event.target.files[0].name + now);
      this.postThumb = event.target.files[0].name;
      console.log(this.postThumb);
      this.postService
        .uploadImageToCloud(data)
        .pipe(finalize(() => this.imgLoading.set(false)))
        .subscribe((imageData) => {
          console.log(imageData);
          this.postThumb = imageData.url;
        });
    }
  }
  post() {
    let post: Post = {
      postId: this.postId().toLocaleString(),
      body: this.postBody,
      thumbUrl: this.postThumb || '',
      timeStamp: new Date().toISOString(),
      likes: 0,
      comments: [],
      author: {
        userId: this.userService.user()?.userId,
        userName: this.userService.user()?.userName,
        picture: this.userService.user()?.picture,
        title: this.userService.user()?.title,
      },
    };
    if ( this.postBody.length > 5) {
      this.postService.addNewPost(post);
      this.isLoading.set(true);
      setTimeout(() => {
        this.allPosts.update((posts) => {
          posts.unshift(post);
          return posts;
        });
        this.postThumb = null;
        this.postBody = '';
        this.isLoading.set(false);
      }, 300);
    } else this.snack.success('Invalid Data');
  }
}
