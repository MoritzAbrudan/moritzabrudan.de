import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModeService {

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
    return this.modes;
  }
  constructor() { }
}
