import { Component, OnInit } from '@angular/core';
import { ModeService } from '../mode.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  providers: [ModeService]
})
export class NavigationComponent implements OnInit {

  constructor(public modeService: ModeService) { }

  ngOnInit(): void {
  }

  changeMode() {
    this.modeService.darkMode = !this.modeService.darkMode;
    console.log('Mode changed ' + this.modeService.darkMode);
  }
}