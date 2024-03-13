import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private theme = new BehaviorSubject('light');
  currentTheme = this.theme.asObservable();
  constructor() { }

  changeTheme(theme: string) {
    this.theme.next(theme);
  }
}
