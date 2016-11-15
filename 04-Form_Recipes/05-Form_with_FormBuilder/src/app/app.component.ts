import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <form (ngSubmit)="onSubmit()" [formGroup]="myForm" novalidate>
      <label>Username
        <input type="text" formControlName="username"/>
      </label>
      <label>Password
        <input type="password" formControlName="password"/>
      </label>
      <button type="submit">Submit</button>
    </form>
  `
})
export class AppComponent {
  myForm: FormGroup;
  constructor(builder: FormBuilder) {
    this.myForm = builder.group({
      username: builder.control(''),
      password: builder.control('')
    });
  }

  onSubmit() {
    console.log(this.myForm.value);
  }
}
