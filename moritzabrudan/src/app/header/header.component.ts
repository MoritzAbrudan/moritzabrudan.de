import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';
import { ModeService } from '../mode.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public modeService: ModeService, public languageService: LanguageService) {
  }

  ngOnInit(): void {
  }

}