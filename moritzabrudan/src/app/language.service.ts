import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  english: boolean = true;

  getLanguage() {
    return this.english;
  }

  constructor() { }
}
