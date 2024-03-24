import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {
  
  form: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: [, Validators.required],
      newPassword: [, Validators.required],
      confirmPassword: [, Validators.required],
    });
   }




   resetPassword(){
    this.loading = true;
    console.log(this.form.value);
   }



  }



