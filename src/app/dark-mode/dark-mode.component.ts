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
    this.themeService.changeTheme(
      document.body.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark'
    );
    this.isDarkMode =!this.isDarkMode;
  }
}
