import { Component, OnInit } from '@angular/core';
import { ModeService } from '../mode.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  providers: [ModeService]
})
export class NavigationComponent implements OnInit {

  modes: any;
  darkMode: boolean = false;

  constructor(private modeService: ModeService) { }

  ngOnInit(): void {
    this.getInfos();
  }

  getInfos() {
    this.modes = this.modeService.getArray();
    this.darkMode = this.modeService.getMode();
  }

  changeMode() {
    this.darkMode = !this.darkMode
    console.log('Mode changed ' + this.darkMode)
    console.log(this.modes);
  }

}