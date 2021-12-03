import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModeService } from './mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'moritzabrudan';
  currentRoute = '';
  mobile: boolean = false;
  constructor(public router: Router, public modeService: ModeService) { }

  ngOnInit(): void {
    if (window.innerWidth <= 740) {
      this.mobile = true;
    }
  }
}