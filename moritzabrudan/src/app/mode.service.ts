import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModeService {

  darkMode: boolean = false;

  modes = [
    {
      name: 'dark',
      darkMode: true,

    },
    {
      name: 'light',
      darkMode: false,
    }
  ]

  getMode() {
    return this.darkMode;
  }
  getArray() {
    return this.modes;
  }
  constructor() { }
}
