import { Component, OnInit } from '@angular/core';
import { ThemeService } from './dark-mode/theme-service/service/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'Pet-App-v2';

  constructor(private themeService: ThemeService) {
    this.themeService.currentTheme.subscribe((theme) =>
      document.body.setAttribute('data-bs-theme', theme)
    );
  }
  ngOnInit(): void {
    this.themeService.currentTheme.subscribe((theme) => {
      this.setTheme(theme);
    });
  }

  private setTheme(theme: string): void {
    document.body.setAttribute('data-bs-theme', theme);
  }
}
