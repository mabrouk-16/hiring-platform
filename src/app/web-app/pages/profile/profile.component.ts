import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { UserService } from '../../../services/user.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { RightSideComponent } from '../../right-side/right-side.component';
import { DatePipe, SlicePipe } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { UserProfile } from './User-Profile';
import { finalize } from 'rxjs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    RouterModule,
    RightSideComponent,
    SlicePipe,
    MatButton,
    DatePipe,
    MatProgressSpinnerModule,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent {
  public userService = inject(UserService);
  private dialog = inject(MatDialog);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  user = signal<UserProfile | null | undefined>({ ...this.userService.user() });
  isLoading = signal(false);
  constructor() {}

  ngOnInit() {
    this.route.url.subscribe(() => {
      const id = this.route.snapshot.params['userId'];
      if (id && id !== this.userService.user()?.userId) {
        this.getUser(id);
      } else this.user.set({ ...this.userService.user() });
    });
  }

  getUser(id: string) {
    this.isLoading.set(true);
    this.userService
      .getUserProfile(id)
      .pipe(finalize(() => this.isLoading.set(false)))
      .subscribe((res) => {
        this.user.set({ ...res.data() });
      });
  }

  editProfile() {
    this.router.navigate([], {
      fragment: 'general',
    });
    this.dialog.open(EditProfileComponent, {
      panelClass: '',
      width: '660px',
    });
  }
}
