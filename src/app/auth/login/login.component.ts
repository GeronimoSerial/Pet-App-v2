import {Component, AfterViewInit} from '@angular/core';
import   Typeit   from 'typeit';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../core/models/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements AfterViewInit{
  ngAfterViewInit() {
    new Typeit('#type-effect', {
      speed: 70,
      startDelay: 900,
      cursor: false
    })
    .type("Empowering pet owners", { delay: 300 })
    .pause(500)
    .delete(6)
    .type("parents", { delay: 150 })
    .pause(500)
    .type(", one paw at a time. 🐕")
    .pause(1000)
    .delete(1)
    .type("🐈")
    .pause(1000)
    .delete(1)
    .type(" 🐾")
    .go();
  }
  form: FormGroup;
  loading = false;
  userClass: User;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: [, Validators.required],
      password: [, Validators.required],
    });
  }
  
  loginUser() {
    this.loading = true;
    this.cancelSpinner();
    // console.log(this.form);
    // console.log(this.form.value);
    var userSession = localStorage.getItem('session')
    
    if (userSession == null) {
      localStorage.setItem('session', JSON.stringify(this.form.value));
    } else {
      this.userClass = JSON.parse('userSession')
    }
    
    localStorage.removeItem('session');
    
  }

  cancelSpinner() {
    setTimeout(() => {
      this.loading = false;
    }, 1500)
  }
}
