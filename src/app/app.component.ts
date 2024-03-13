import { Component } from '@angular/core';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Pet-App-v2';

  constructor(private themeService: ThemeService) {
    this.themeService.currentTheme.subscribe(theme =>
      document.body.setAttribute('data-bs-theme', theme));
   }
}
