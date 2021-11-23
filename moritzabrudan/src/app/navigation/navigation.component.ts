import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';
import { ModeService } from '../mode.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(public modeService: ModeService, public languageService: LanguageService) { }

  ngOnInit(): void {
  }

  changeMode() {
    this.modeService.darkMode = !this.modeService.darkMode;
    console.log('Mode changed ' + this.modeService.darkMode);
  }

  changeLanguage() {
    this.languageService.english = !this.languageService.english;
    console.log('Language changed ' + this.languageService.english);
  }
}