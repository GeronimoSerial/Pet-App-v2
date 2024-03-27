import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private theme = new BehaviorSubject<string>(this.getInitialTheme());
  currentTheme = this.theme.asObservable();
  constructor() {}

  private getInitialTheme(): string {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    } else {
      return 'light';
    }
  }

  changeTheme(theme: string) {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('theme', theme);
    }
    this.theme.next(theme);
  }
}
