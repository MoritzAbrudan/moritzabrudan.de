import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModeService } from './mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'moritzabrudan';
  currentRoute = '';
  mobile: boolean = false;
  constructor(public router: Router, public modeService: ModeService) {
    if (window.screen.width <= 740) {
      this.mobile = true;
    }
  }
}