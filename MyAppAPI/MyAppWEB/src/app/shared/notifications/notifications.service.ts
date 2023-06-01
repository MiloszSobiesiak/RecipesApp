import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationsComponent } from './notifications.component';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(private snackBar: MatSnackBar) { }

  public title = 'Success!';
  public backgroundColor = 'red';

  public success(data: string) {
    this.backgroundColor = 'green';
    this.title = 'Success!'
    this.snackBar.openFromComponent(NotificationsComponent, {
      data: data,
      duration: 3000,
      verticalPosition: "top",
      horizontalPosition: 'right',
      panelClass: 'snackbar'
    });
  }
}
