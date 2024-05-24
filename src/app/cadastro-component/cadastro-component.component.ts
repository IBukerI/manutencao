import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ConsultaCnpjService } from '../consulta-cnpj.service';
import  Swal from 'sweetalert2';
import { MaskService } from '../mask.service';
import { ConsultacepService } from '../consultacep.service';
import { ValidaCpfService } from '../valida-cpf.service';



@Component({
  selector: 'app-cadastro-component',
  templateUrl: './cadastro-component.component.html',
  styleUrls: ['./cadastro-component.component.css']
})
export class CadastroComponentComponent implements OnInit {
  cpfInvalido: boolean = false;
  cepInvalido: boolean = false;
  emailInvalido: boolean = false;

  form: FormGroup = this.fb.group({
      tipo: ['Pessoa Física'],
      nome: [''],
      sobrenome: [''],
      cpf: ['', [Validators.required]],
      razaoSocial: [''],
      nomeFantasia: [''],
      cnpj: ['', [Validators.minLength(14), Validators.required]],
      cep: [''],
      telefone: [''],
      telefoneCelular: [''],
      logradouro: [''],
      numero: [''],
      bairro: [''],
      cidade: [''],
      estado: [''],
      complemento: [''],
      email: ['', [Validators.required]],

    });

  constructor(private fb: FormBuilder, private router: Router, private consultaCnpjService: ConsultaCnpjService,
    private ConsultacepService: ConsultacepService, public maskService: MaskService, public ValidaCpfService: ValidaCpfService) { }

  ngOnInit() {
    // código de inicialização aqui...
  }

  // restante do código...



     onTipoChange(tipo: string) {
      //   if (tipo === 'Pessoa Física') {
      //     this.form.get('razaoSocial')?.disable();
      //     this.form.get('nomeFantasia')?.disable();
      //     this.form.get('cnpj')?.disable();

      //     this.form.get('nome')?.enable();
      //     this.form.get('sobrenome')?.enable();
      //     this.form.get('cpf')?.enable();
      //   } else if (tipo === 'Pessoa Jurídica') {
      //     this.form.get('nome')?.disable();
      //     this.form.get('sobrenome')?.disable();
      //     this.form.get('cpf')?.disable();

      //     this.form.get('razaoSocial')?.enable();
      //     this.form.get('nomeFantasia')?.enable();
      //     this.form.get('cnpj')?.enable();
      // }
    }



  onBack() {
    window.history.back();
  }

  onSubmit() {
    if (this.form.valid) {
      Swal.fire({
        title: 'Formulário Salvo com Sucesso!',
        text: 'Parabéns Você Salvou seu Cliente.',
        icon: 'success',
        confirmButtonText: 'OK',
        confirmButtonColor: '#00FF00',
      })
    } else {
      Swal.fire({
        title: 'Formulário Inválido!',
        text: 'Por Favor, Preencha todos os campos obrigatórios.',
        icon: 'error',
        confirmButtonText: 'OK',
        confirmButtonColor: '#f39d19',
      })
    }
  }

  buscarDadosCNPJ() {
    const cnpj = this.form.get('cnpj')?.value;
    if (cnpj) {
      this.consultaCnpjService.buscarDadosCNPJ(cnpj).subscribe(
        data => {


          this.form.get('razaoSocial')?.setValue(data.razao_social);
          this.form.get('nomeFantasia')?.setValue(data.nome_fantasia);
          this.form.get('cep')?.setValue(data.cep);
          if (data.cep) {
            this.buscarDadosCep();
          }

        },
        error => {
          Swal.fire({
            title: 'CNPJ Invalido!',
            text: 'Por Favor, Digite um CNPJ válido.',
            icon: 'error',
            confirmButtonText: 'OK',
            confirmButtonColor: '#f39d19',
          })
        }
      );
    }
  }

  buscarDadosCep() {
    const cep = this.form.get('cep')?.value;
      if (cep) {
        this.ConsultacepService.buscarCep(cep).subscribe(
          data => {
            this.form.get('logradouro')?.setValue(data.street);
            this.form.get('bairro')?.setValue(data.neighborhood);
            this.form.get('cidade')?.setValue(data.city);
            this.form.get('estado')?.setValue(data.state);
          },
          error => {
            this.cepInvalido = true;
          }
        );
      }
  }

  validaCpf() {
    const cpf = this.form.get('cpf')?.value;
    if (cpf) {
      if (!this.ValidaCpfService.validaCPF(cpf)) {
          this.cpfInvalido = true;
        } else {
          this.cpfInvalido = false;
        }
      }
  }

  validaEmail() {
    const email = this.form.get('email')?.value;
    if (email) {
      if(!this.maskService.validaEmail(email)) {
        this.emailInvalido = true;
      }
    }
  }

}








