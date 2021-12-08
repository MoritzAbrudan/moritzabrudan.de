import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';
import { ModeService } from '../mode.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  table: boolean = true;

  constructor(public modeService: ModeService, public languageService: LanguageService) { }

  ngOnInit(): void {
    this.handleResize()
  }

  handleResize() {
    if (window.innerWidth <= 680) {
      this.table = false;
    } else {
      this.table = true;
    }
  }

}
