import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent {

  @Input() type: 'text' | 'email' | 'password' = 'text';
  @Input() label: String=""  
  @Input() placeholder: String=""  
  @Input() formName: String=""

}
