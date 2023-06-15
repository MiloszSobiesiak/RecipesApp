import { Component } from '@angular/core';
import { NotificationsService } from './notifications.service';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('200ms ease-in', style({ transform: 'translateX(0%)' })),
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ transform: 'translateX(100%)' })),
      ]),
    ]),
  ],
})
export class NotificationsComponent {
  public showNotifications: boolean;

  constructor(public notificationService: NotificationsService) {}

  public closeNotification(): void {
    this.notificationService.closeNotification();
  }
}
