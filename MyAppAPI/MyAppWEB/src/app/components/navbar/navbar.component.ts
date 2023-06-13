import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuService } from 'src/app/services/menu.service';
import { EditingModeService } from 'src/app/shared/services/editing-mode.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  public $mode: Observable<string>;

  constructor(
    public menuService: MenuService,
    private editService: EditingModeService
  ) {}

  public ngOnInit(): void {
    this.$mode = this.editService.getMode();
  }

  public changeMode(): void {
    if (this.editService.mode.value === 'view') {
      this.editService.startEditing();
    } else {
      this.editService.stopEditing();
    }
  }
}
