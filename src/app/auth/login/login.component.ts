import {Component, OnInit} from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../core/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit{
  text = '';
  completeText= 'Empowering pet parents, one paw at a time. 🐾';
  speed = 100;
  i = 0;
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
  
  ngOnInit() {
    this.writeEffect();
    
  }

  cancelSpinner() {
    setTimeout(() => {
      this.loading = false;
    }, 1500)
  }


   writeEffect(){
    if (this.i  < this.completeText.length) {
      this.text += this.completeText.charAt(this.i);
      this.i++;
      setTimeout(() => {
        this.writeEffect();
      }, this.speed);
      
    }
  }
}
