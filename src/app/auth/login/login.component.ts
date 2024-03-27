import { Component, AfterViewInit } from '@angular/core';
import Typeit from 'typeit';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User, UserLogin } from '../../core/models/user';
import { AuthService } from '../../services/users/auth.service';
import { Router } from '@angular/router';
import { response } from 'express';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements AfterViewInit {
  ngAfterViewInit() {
    new Typeit('#type-effect', {
      speed: 40,
      startDelay: 900,
      deleteSpeed: 150,
      cursor: false,
    })
      .type('Empowering pet owners', { delay: 300 })
      .pause(500)
      .delete(6)
      .type('parents', { delay: 150 })
      .pause(500)
      .type(', one paw at a time. 🐕')
      .pause(1000)
      .delete(1)
      .type('🐈')
      .pause(1000)
      .delete(1)
      .type(' 🐾')
      .go();
  }
  form: FormGroup;
  loading = false;
  userClass: User;
  constructor(private fb: FormBuilder, private authService: AuthService, private route: Router, private toastr: ToastrService) {
    this.form = this.fb.group({
      email: [, Validators.required],
      password: [, Validators.required],
    });
    
  
  }

  loginUser() {
    this.loading = true;
    this.cancelSpinner();
    
    var userData : UserLogin = {
      username: this.form.get('email').value,
      password: this.form.get('password').value
    };
    
    this.authService.login(userData).subscribe({
      next:response => {
        this.route.navigate(['pages/home']);
        this.loading = false;
      },
      error:  (error) => {
        this.toastr.error(error.error.message);
        console.log(error);
        this.loading = false;
      },
      complete: () => {}
    })
  //   var userSession = localStorage.getItem('session');

  //   if (userSession == null) {
  //     localStorage.setItem('session', JSON.stringify(this.form.value));
  //   } else {
  //     this.userClass = JSON.parse('userSession');
  //   }

  //   localStorage.removeItem('session');
   }

  cancelSpinner() {
    setTimeout(() => {
      this.loading = false;
    }, 2500);
  }
}
