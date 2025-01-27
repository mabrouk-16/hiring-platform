import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { from, Observable } from 'rxjs';
import { environment } from '../../../environment';
import { Post } from '../pages/profile/User-Profile';
import { UserService } from '../../services/user.service';
import { SnackbarService } from '../../shared/snack.service';
import {
  collectionData,
  Firestore,
  setDoc,
  collection,
  doc,
  CollectionReference,
  getDocs,
  onSnapshot,
  query,
} from '@angular/fire/firestore';
import { databaseInstance$ } from '@angular/fire/database';
@Injectable({
  providedIn: 'root',
})
export class PostService {
  private http = inject(HttpClient);
  public userService = inject(UserService);
  private snack = inject(SnackbarService);
  private firestore = inject(Firestore);
  // private db = inject(AngularFireDatabase);
  postsCollections!: CollectionReference;

  db = databaseInstance$;
  constructor() {}

  uploadImageToCloud(data: any): Observable<any> {
    return this.http.post(
      `https://api.cloudinary.com/v1_1/${environment.cloudinaryConfig.CloudName}/image/upload`,
      data
    );
  }
  addNewPost(post: Post) {
    const postArray = this.userService.user()?.posts;
    postArray?.push(post);
    this.userService
      .updateUserProfile(this.userService.user()?.userId || '', {
        ...this.userService.user(),
        posts: postArray,
      })
      .subscribe(() => {
        this.userService.setUserFromFB(this.userService.user()?.userId || '');
        if (post.postId) {
          this.createNewPost(post.postId, post);
        }
        this.snack.success('Post created successfully');
      });
  }
  createNewPost(id: string, post: Post) {
    const ref = doc(this.firestore, 'posts', id.toLocaleString());
    return from(setDoc(ref, post));
  }
  getAllPosts() {
    return from(getDocs(collection(this.firestore, 'posts')));
  }
}
