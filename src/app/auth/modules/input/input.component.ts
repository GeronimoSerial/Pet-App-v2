import { Component, Input } from '@angular/core';
import { FormGroup,FormArray, FormControl, Validator } from '@angular/forms';
// import { MatDatepicker } from '@angular/material/datepicker';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  hide = true;
  @Input() propertyName: string;
  @Input() inputValue: string;
  @Input() formChild: FormGroup;
  @Input() fieldType: string;
  formControl: any;
  form: any;
}
