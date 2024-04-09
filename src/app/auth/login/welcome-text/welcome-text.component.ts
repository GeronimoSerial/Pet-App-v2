import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-welcome-text',
  templateUrl: './welcome-text.component.html',
  styleUrls: ['./welcome-text.component.scss']
})
export class WelcomeTextComponent implements OnInit {

  words = ['owners ❌', 'parents ✔️', 'lovers 😍', 'fans !🤩', 'friends 💜'];
  current = 0;
  fadeOut = false;
  fadeIn = false;
  // @ViewChild('changingWord', { static: true }) changingWord: ElementRef;

  ngOnInit(): void {
    setInterval(() => {
      this.fadeOut = true;
      setTimeout(() => {
        this.current = (this.current + 1) % this.words.length;
        this.fadeOut = false;
        this.fadeIn = true;
        setTimeout(() => {
          this.fadeIn = false;
        }, 1000);
      }, 1000);
    }, 3000);
  }
}

