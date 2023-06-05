import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input()
  public value: string;

  @Input()
  public placeholder: string;

  @Input()
  public textarea = false;

  @Input()
  public width: number;

  @Input()
  public fontSize: number;

  @Output()
  public valueChange = new EventEmitter<string>();
}
