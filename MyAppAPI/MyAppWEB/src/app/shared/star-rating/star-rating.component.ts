import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit {

  @Input() private rating: number = 1;
  @Input() private starCount: number = 5;
  @Input() public canEdit = true;
  @Output() private ratingUpdated = new EventEmitter<number>();

  public ratingArr: number[] = [];

  constructor() {
  }


  public ngOnInit() {
    for (let index = 0; index < this.starCount; index++) {
      this.ratingArr.push(index);
    }
  }
  public onClick(rating:number) {
    this.rating = rating;
    this.ratingUpdated.emit(rating);
  }

  public showIcon(index:number) {
    if (this.rating >= index + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }
}
