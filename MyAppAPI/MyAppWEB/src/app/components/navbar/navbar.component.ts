import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { EditingModeService } from 'src/app/shared/services/editing-mode.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    public menuService: MenuService,
    private editService: EditingModeService
  ) { }

  ngOnInit(): void {
  }

  public start() {
    this.editService.startEditing();
  }

  public stop() {
    this.editService.stopEditing();
  }

}
