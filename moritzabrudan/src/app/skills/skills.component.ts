import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';
import { ModeService } from '../mode.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  wide: boolean = true;

  constructor(public modeService: ModeService, public languageService: LanguageService) { }

  ngOnInit(): void {
   this.handleResize();
  }

  handleResize(){
    if (window.innerWidth <= 663) {
      this.wide = false;
    }else{
      this.wide = true;
    }
  }

}
