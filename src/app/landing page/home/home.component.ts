import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  signal,
  ViewChild,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { FeatureSectionComponent } from './feature-section/feature-section.component';
import { RecentSectionComponent } from "./recent-section/recent-section.component";
import { HomeJobsComponent } from "./home-jobs/home-jobs.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [
    MatButtonModule,
    MatExpansionModule,
    CommonModule,
    FeatureSectionComponent,
    RecentSectionComponent,
    HomeJobsComponent
],
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('fadeInOut', [
      state('enter', style({ opacity: 1 })),
      state('leave', style({ opacity: 0 })),
      transition('* <=> *', [animate('1000ms ease-in')]),
      // transition(':leave', [animate('1000ms ease-out',)]),
    ]),
    trigger('goRight', [
      state('enter', style({ translate: '1600px'},)),
      state('leave', style({ translate: '0px'  })),
      transition('* <=> *', [animate('500ms ease-in')]),
      // transition(':leave', [animate('1000ms ease-out',)]),
    ]),
    trigger('goLeft', [
      state('enter', style({ translate: '-1600px'},)),
      state('leave', style({ translate: '0px'  })),
      transition('* <=> *', [animate('500ms ease-in')]),
      // transition(':leave', [animate('1000ms ease-out',)]),
    ]),
  ],
})
export class HomeComponent {
  panelOpenState = false;

  constructor() {}
  isVisible = signal(false);
  goRight = signal(false);
  goLeft = signal(false);

  ngAfterViewInit() {
    this.checkVisibility();
  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.checkVisibility(); // Check on scroll
  }

  checkVisibility() {
    console.log(window.scrollY);
    if (window.scrollY < 100) {
        this.isVisible.set(true);
    } else {
      this.isVisible.set(false);
    }
    if (window.scrollY > 800 && window.scrollY < 1600) {
        this.goLeft.set(true);
    } else {
      this.goLeft.set(false);
    }
    if (window.scrollY > 1200 ) {
      this.goRight.set(true);
    } else {
      this.goRight.set(false);
    }
  }
}
