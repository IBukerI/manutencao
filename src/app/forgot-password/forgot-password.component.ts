import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from  'sweetalert2';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      'username': ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      Swal.fire({
      title: 'Enviado!',
      text: 'Uma nova Senha foi enviada ao seu e-mail.',
      icon: 'success',
      confirmButtonColor: '#f39d19',
      confirmButtonText: 'OK'
      })
    }
  }

  onBack() {
    window.history.back();
  }
}
