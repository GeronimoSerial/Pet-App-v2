import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../services/users/auth.service';

export const accessGuard: CanActivateFn = (route, state) => {
  var isLogged = inject(AuthService).isLogged();
  if (isLogged) {
    return isLogged
  } 
  else {
    inject(Router).navigate(['auth/login'])
    return false;
  }
};
