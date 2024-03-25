import { Component, Input, input } from '@angular/core';
import {
  FormGroup,
  FormArray,
  FormControl,
  Validator,
  AbstractControl,
} from '@angular/forms';
// import { MatDatepicker } from '@angular/material/datepicker';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  hide = true;
  @Input() propertyName: string;
  @Input() inputValue: string;
  @Input() formChild: FormGroup;
  @Input() loading = false;
  @Input() type: string;

  getErrors(control: AbstractControl): string[] {
    const errors: string[] = [];
    if (control.errors) {
      for (const errorKey in control.errors) {
        if (errorKey) {
          switch (errorKey) {
            case 'required':
              errors.push('This field is required');
              break;

            case 'minlength':
              errors.push(
                'Must have at least ' +
                  control.errors[errorKey].requiredLength +
                  ' characters'
              );
              break;

            case 'mismatch':
              errors.push('Passwords do not match');

              break;

            default:
              errors.push('Error not recognized' + errorKey);
              break;
          }
        }
      }
    }
    return errors;
  }
}
