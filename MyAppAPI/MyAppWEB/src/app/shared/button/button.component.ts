import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input()
  public name: string;
  @Input()
  public link: string;
  @Input()
  public disabled = false;
  @Input()
  public size: number;

  constructor() { }
}
