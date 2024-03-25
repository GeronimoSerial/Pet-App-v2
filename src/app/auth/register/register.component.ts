import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/users/auth.service';
import { UserRegister } from '../../core/models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  form: FormGroup;
  loading = false;
  srcResult: any;
  hide = false;
  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      birthday: ['', Validators.required],
      profilePhoto: [],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
    }, 
    {
      validators: this.passwordMatchValidator
        
     
    })
    
  }

  registerUser() {
    var userToRegister: UserRegister = {
      username: this.form.get('email').value,
      password:this.form.get('password').value,
      name:this.form.get('name').value,
      lastname:this.form.get('lastName').value,
      birthday:this.form.get('birthday').value
    }
    return this.authService.register(userToRegister);
    
    console.log(this.form.value);
    
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

  passwordMatchValidator(formGroup: FormGroup){
    const passwordControl = formGroup.get('password');
    const confirmPasswordControl = formGroup.get( 'confirmPassword');
    if (passwordControl.value == confirmPasswordControl.value) {
      confirmPasswordControl.setErrors(null);
    }
    else{
      confirmPasswordControl.setErrors({mismatch: true});
    }
  }
}
