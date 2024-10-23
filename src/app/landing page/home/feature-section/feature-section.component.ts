import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  signal,
  ViewChild,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
@Component({
  selector: 'app-feature-section',
  standalone: true,
  imports: [MatButtonModule, MatExpansionModule, CommonModule],
  templateUrl: './feature-section.component.html',
  styleUrls: ['./feature-section.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,

  animations: [
    trigger('fadeInOut', [
      state('enter', style({ opacity: 1 })),
      state('leave', style({ opacity: 0 })),
      transition('* <=> *', [animate('500ms ease-in')]),
      // transition(':leave', [animate('1000ms ease-out',)]),
    ]),
  ],
})
export class FeatureSectionComponent implements AfterViewInit {
  panelOpenState = false;

  isVisible = signal(false); 

  ngAfterViewInit() {
    this.checkVisibility();
  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.checkVisibility(); // Check on scroll
  }

  checkVisibility() {
    console.log(window.scrollY);
    if (window.scrollY > 100 && window.scrollY < 1000) {
      this.isVisible.set(true);
    }else {
      this.isVisible.set(false);
    }
  }
}
