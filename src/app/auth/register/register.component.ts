import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { InputComponent } from '../modules/input/input.component';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  form: FormGroup;
  loading = false;
  srcResult: any;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      birthDay: ['', Validators.required],
      profilePhoto: [],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    })
    debugger
  }

  registerUser() {
    // this.loading = true;
    console.log(this.form.value);
    debugger
  }
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    const reader = new FileReader();
    
    reader.onload = (e: any) => {
      this.srcResult = e.target.result;
      this.form.get('profilePhoto').setValue(this.srcResult);
    }
    
    reader.readAsDataURL(file);
  }
}
