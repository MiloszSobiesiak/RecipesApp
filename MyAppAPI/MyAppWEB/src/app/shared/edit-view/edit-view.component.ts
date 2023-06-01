import { Component, ContentChild, Directive, OnInit, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
import { EditingModeService } from '../services/editing-mode.service';

@Directive({
  selector: '[view]',
})
export class ViewDirective {
  constructor( public templateRef: TemplateRef<unknown>) {}
}

@Directive({
  selector: '[edit]',
})
export class EditDirective {
  constructor( public templateRef: TemplateRef<unknown>) {}
}

@Component({
    selector: 'app-edit-view',
    templateUrl: './edit-view.component.html',
    styleUrls: ['./edit-view.component.scss']
})

export class EditViewComponent implements OnInit {
  @ContentChild(ViewDirective, {read: TemplateRef})
  public view!: ViewDirective;

  @ContentChild(EditDirective, {read: TemplateRef})
  public edit!: EditDirective;

  public mode: Observable<string>;

  constructor( private editingService: EditingModeService) { }

  public ngOnInit(): void {
    this.mode = this.editingService.getMode();
  }
}
