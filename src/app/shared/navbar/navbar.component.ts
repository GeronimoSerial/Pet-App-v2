import { Component } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { AuthService } from '../../services/users/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  srcResult = null;

  constructor(private authService: AuthService) {}

  logOut(){
    this.authService.logout();
  }

}
