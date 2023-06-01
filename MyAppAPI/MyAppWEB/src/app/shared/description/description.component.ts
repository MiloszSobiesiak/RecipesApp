import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent{

  @Input()
  public set desc(text:string) {
    this.descFormated = text.split(',')
  }

  public descFormated: string[];

}
