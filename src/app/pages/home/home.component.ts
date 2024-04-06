import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}


/**
 * Considera utilizar OnPush change detection en componentes
 *  que no necesitan actualizarse constantemente.
 */