import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CacheService {
  private storage: { [key: string]: string | Subject<string> } = {};

  public has(key: string): boolean {
    return this.storage[key] !== undefined;
  }

  public willHas(key: string): boolean {
    return this.has(key) && this.storage[key] instanceof Subject;
  }

  public willSet(key: string): void {
    if (!this.willHas(key)) {
      this.storage[key] = new Subject();
    }
  }

  public set(key: string, value: string): void {
    if (this.willHas(key)) {
      (this.storage[key] as Subject<string>).next(value);
    }

    this.storage[key] = value;
  }

  public get(key: string, defaultValue?: string): Observable<string> {
    if (!this.has(key)) {
      return of(defaultValue);
    }

    if (this.storage[key] instanceof Subject) {
      return this.storage[key] as Subject<string>;
    }

    return of(this.storage[key] as string);
  }
}
