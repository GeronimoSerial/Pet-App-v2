import { Component } from '@angular/core';
import { ThemeService } from './theme-service/service/theme.service';

@Component({
  selector: 'app-dark-mode',
  templateUrl: './dark-mode.component.html',
  styleUrl: './dark-mode.component.scss',
})
export class DarkModeComponent {
  isDarkMode = false;
  constructor(private themeService: ThemeService) {}
  toggleTheme() {
    let newTheme = this.isDarkMode ? 'light' : 'dark';
    this.themeService.changeTheme(newTheme);
  
    if (newTheme === 'dark') {
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
      document.body.setAttribute('data-bs-theme', 'dark');
    } else {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
      document.body.setAttribute('data-bs-theme', 'light');
    }
    this.isDarkMode = !this.isDarkMode;
  }
  
}
