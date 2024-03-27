import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { BehaviorSubject, map } from 'rxjs';
import { User, UserLogin, UserRegister } from '../../core/models/user';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { debug, error } from 'console';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  base_url = environment.base_url;
  currentUser: User = new User();
  currentUserSubject: BehaviorSubject<User>;

  constructor(private http: HttpClient, private route: Router, private toastr: ToastrService) {
    this.currentUser.email =
      localStorage.getItem('userEmail') == null
        ? ''
        : localStorage.getItem('userEmail');

    this.currentUserSubject = new BehaviorSubject<User>(this.currentUser);
  }

  
  login(loginForm: UserLogin) {
    return this.http.post(`${this.base_url}/Account/login`, loginForm).
    pipe(
      map((res: any) => {
        localStorage.setItem('userSession', JSON.stringify(res));
        localStorage.setItem('userEmail', loginForm.username);
        return res;
      })
    );
  }

  register(registerData: UserRegister) {
    return this.http
      .post(`${this.base_url}/Account/register`, registerData)
      .subscribe({
        next: (res) => {
          localStorage.setItem('userSession', JSON.stringify(res));
          localStorage.setItem('username', registerData.username);
          this.route.navigate(['/pages/home']);
        },
        error: (error) => {
          console.log(error);
          if(error.error.length >= 1){
            error.error.forEach(errorMsg => {
              this.toastr.error(errorMsg.description);
            });
          }
        }   
      })
  }

  isLogged(): boolean {
    return !!localStorage.getItem('userSession');
  }

  logout() {
    localStorage.clear();
    this.route.navigate(['auth/login']);
  }
}
