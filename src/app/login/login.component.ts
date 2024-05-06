import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    'username': new FormControl(null),
    'password': new FormControl(null),
  });

  formSubmitted = false;

  ngOnInit() {
    this.loginForm.get('username')?.setValidators(Validators.required);
    this.loginForm.get('password')?.setValidators(Validators.required);
  }

  onSubmit(): void {
    this.formSubmitted = true;
    if (this.loginForm.valid) {
      console.log('valido');
    }
    console.log('this.formSubmitted', this.formSubmitted);
  }
}
