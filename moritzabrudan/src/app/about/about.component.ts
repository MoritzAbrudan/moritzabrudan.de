import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';
import { ModeService } from '../mode.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(public modeService: ModeService, public languageService: LanguageService) { }

  ngOnInit(): void {
  }

}
