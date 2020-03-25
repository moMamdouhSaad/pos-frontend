import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../core/header.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  constructor(private headerService: HeaderService) { }

  ngOnInit() {
    this.headerService.setAdminPanelChoice(null)
  }

  setAdminPanelChoice(choice: string){
    this.headerService.setAdminPanelChoice(choice)
  }

}
