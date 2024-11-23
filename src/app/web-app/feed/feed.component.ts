import { Component, OnInit, signal } from '@angular/core';
import { share } from 'rxjs';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [],
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
})
export class FeedComponent implements OnInit {
  isLoading = signal(true);
  arr = [1, 2, 3];
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
    {
      userImage: 'assets/web_images/user-3.png',
      name: 'Bejamin Leo',
      title: 'Founder and CEO at Giva | Angel Investor',
      time: '2 hours ago ',
      body: ' The success of every website depends on Search engine optimisation and digital marketing strategy. If you are not in the first page of all major search engines then you are ahead among your competitors.',
      thumbnail: 'assets/web_images/post-image-4.png',
      likedUsers: 'Adam Doe and 31 others',
      comments: '23',
      shares: '2',
    },
  ];
  constructor() {
    setTimeout(() => {
      this.isLoading.set(false);
    }, 2000);
  }

  ngOnInit() {}
}
