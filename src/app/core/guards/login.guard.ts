import { inject } from '@angular/core';
import {Router ,CanActivateFn } from '@angular/router';
import { AuthService } from '../../services/users/auth.service';

export const loginGuard: CanActivateFn = (route, state) => {
  var isLogged = inject(AuthService).isLogged();
  if (!isLogged) {
    return true;
  } else {
    inject(Router).navigate(['pages/home']);
    return false;  
  }

};
