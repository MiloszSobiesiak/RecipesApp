import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditingModeService {

  constructor() { }
  public readonly mode = new BehaviorSubject<string>('view');

  public getMode(): Observable<string> {
    return this.mode.asObservable();
  }

  public startEditing(): void {
    this.mode.next('edit');
  }

  public stopEditing(): void {
    this.mode.next('view');
  }
}
