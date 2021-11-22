import { Component, OnInit } from '@angular/core';
import { ModeService } from '../mode.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  providers: [ModeService]
})
export class NavigationComponent implements OnInit {

  modes='';

  constructor(private modeService: ModeService) { }

  ngOnInit(): void {
    this.getMode();
  }

  getMode(){
    this.darkMode = this.modeService.getMode();
  }

  changeMode() {
    this.darkMode = !this.darkMode;
  }

}
