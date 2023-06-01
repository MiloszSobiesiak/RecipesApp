import { Component, Inject, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { NotificationsService } from './notifications.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: string,
    public notificationService: NotificationsService
  ) { }

  ngOnInit(): void {
  }

}
