import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/core/header.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private headerService: HeaderService) { }

  ngOnInit() {
    this.headerService.setAdminPanelChoice(null)
  }

}
