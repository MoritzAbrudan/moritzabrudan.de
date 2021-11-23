import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModeService {

  darkMode: boolean = true;

  getMode() {
    return this.darkMode;
  }
  constructor() { }
}
