import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';



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
  hidePassword = true;

  ngOnInit() {
    this.loginForm.get('username')?.setValidators(Validators.required);
    this.loginForm.get('password')?.setValidators(Validators.required);
  }

  constructor(private router: Router) { }

    togglePasswordVisibility() {
      this.hidePassword = !this.hidePassword;
    }

  onSubmit(): void {
    this.formSubmitted = true;
    if (this.loginForm.valid) {
      console.log('valido');
      this.router.navigate(['/pagina-inicial']);
    }
    console.log('this.formSubmitted', this.formSubmitted);
  }
}
