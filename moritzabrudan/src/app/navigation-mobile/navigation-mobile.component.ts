import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';
import { ModeService } from '../mode.service';

@Component({
  selector: 'app-navigation-mobile',
  templateUrl: './navigation-mobile.component.html',
  styleUrls: ['./navigation-mobile.component.scss']
})
export class NavigationMobileComponent implements OnInit {

  mobile: boolean = false;

  constructor(public modeService: ModeService, public languageService: LanguageService) { }

  ngOnInit(): void {
  }

  changeMode() {
    this.modeService.darkMode = !this.modeService.darkMode;
  }

  changeLanguage() {
    this.languageService.english = !this.languageService.english;
  }

  open() {
    this.mobile = true;
  }

  close(){
    this.mobile = false;
  }

}
