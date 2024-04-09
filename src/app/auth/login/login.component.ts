import { Component, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User, UserLogin } from '../../core/models/user';
import { AuthService } from '../../services/users/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent{
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
