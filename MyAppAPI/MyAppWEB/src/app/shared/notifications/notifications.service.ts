import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export enum TOAST_STATE {  
  success = 'Success',  
  warning ='Warning',  
  error ='Error'
};

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  public isVisible: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);  
  public toastMessage: BehaviorSubject<string> = new BehaviorSubject<string>('Default Toast Message');  
  public toastState: BehaviorSubject<string> = new BehaviorSubject<string>(TOAST_STATE.success);  

  public notify(toastState: TOAST_STATE, toastMsg: string, duration?: number): void {    ﻿
    this.toastState.next(toastState);    
    this.toastMessage.next(toastMsg);    
    this.isVisible.next(true);  
    setTimeout(() => {
      this.isVisible.next(false);
    }, duration ?? 3000) 
  } 

  public closeNotification(): void {    
    this.isVisible.next(false);  
  }
}
