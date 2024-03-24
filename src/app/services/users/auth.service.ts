import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { BehaviorSubject } from 'rxjs';
import { User, UserLogin, UserRegister } from '../../core/models/user';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  base_url = environment.base_url;
  currentUser: User = new User();
  currentUserSubject: BehaviorSubject<User>;

  constructor(private http: HttpClient, private route: Router) { 
    this.currentUser.email = localStorage.getItem('userEmail') == null ? '' : localStorage.getItem('userEmail');

    this.currentUserSubject = new BehaviorSubject<User>(this.currentUser);
  }
  login(loginForm: UserLogin){

    return this.http.post(`${this.base_url}/login`, loginForm); 

    localStorage.setItem('userSession',JSON.stringify(loginForm));
    localStorage.setItem('userEmail', loginForm.email);
    this.route.navigate(['pages/home']);
  }

  register(registerData: UserRegister){
    

  }

  isLogged(): boolean{

    return !!localStorage.getItem('userSession');
  }

  logout(){
    localStorage.clear();
    this.route.navigate(["login"]);
  }

}
