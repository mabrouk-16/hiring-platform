import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { AuthPopupComponent } from '../../auth/authPopup/authPopup.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-nav-header',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.css'],
})
export class NavHeaderComponent {
  selectedTab: number = 0;

  constructor(public dialog: MatDialog) {}
  openPopup() {
    const dialogRef = this.dialog.open(AuthPopupComponent, {
      panelClass: 'FC-dialog',
      width: '589px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (!result) {
      }
    });
  }
}
