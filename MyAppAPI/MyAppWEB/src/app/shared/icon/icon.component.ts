import { HttpClient } from '@angular/common/http';
import {
  Component,
  ElementRef,
  HostBinding,
  Input
} from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { CacheService } from '../services/cache.service';

@Component({
  selector: 'app-icon',
  template: '',
  styles: [':host {font-size: 0 ;}'],
})
export class IconComponent {
  @Input()
  public set icon(data: string ) {
    if (data) {
      this.iconName = data;
      this.updateIcon();
    }
  };

  @Input()
  @HostBinding('style.width')
  @HostBinding('style.height')
  public size = '18px';

  @Input()
  @HostBinding('style.color')
  public color = '';

  @Input()
  @HostBinding('style.display')
  public display = 'inline-block';

  @Input()
  @HostBinding('style.verticalAlign')
  public verticalAlign = 'middle';

  @Input()
  @HostBinding('style.overflow')
  public overflow = 'hidden';

  private iconName: string;
  private gc = new Subject<void>();

  constructor(
    private el: ElementRef,
    private http: HttpClient,
    private cache: CacheService
  ) {}

  private updateIcon(): void {
    const url = `/assets/${this.iconName}.svg`;
    this.loadIcon(url)
      .pipe(takeUntil(this.gc))
      .subscribe((svg) => {
        (this.el.nativeElement.innerHTML = svg), console.log(svg);
      });
  }

  private loadIcon(url: string): Observable<string> {
    const cacheKey = this.getCacheKey(url);
    if (!this.cache.has(cacheKey)) {
      console.log('siema')
      this.cache.willSet(cacheKey);
      this.http.get(url, { responseType: 'text' }).subscribe((svg) => {
        this.cache.set(cacheKey, svg);
      });
    }
    return this.cache.get(cacheKey);
  }

  private getCacheKey(url: string): string {
    return `icon::${url}`;
  }

  public ngOnDestroy(): void {
    this.gc.next();
    this.gc.complete();
  }
}
