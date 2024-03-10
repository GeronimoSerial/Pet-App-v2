import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() propertyName: string;
  @Input() inputValue: string;
  @Input() formChild: FormGroup;
  @Input() isDateField: boolean;
  @Input() isEmailField: boolean;
  @Input() isPwdField: boolean;

  fieldType(): string {
    if (this.isEmailField) {
      return "email";
    } else if (this.isPwdField) {
      return "password"; 
    } else {
      return "text";
    }
  }
}
