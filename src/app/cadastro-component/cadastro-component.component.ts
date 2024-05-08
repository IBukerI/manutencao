import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ConsultaCnpjService } from '../consulta-cnpj.service';



@Component({
  selector: 'app-cadastro-component',
  templateUrl: './cadastro-component.component.html',
  styleUrls: ['./cadastro-component.component.css']
})
export class CadastroComponentComponent implements OnInit {

  form: FormGroup = this.fb.group({
      tipo: ['Pessoa Física'],
      nome: [''],
      sobrenome: [''],
      cpf: [''],
      razaoSocial: [''],
      nomeFantasia: [''],
      cnpj: ['', [Validators.minLength(14), Validators.required]],
      cepj: [''],
      cepF: [''],
      telefone: [''],
    });

  constructor(private fb: FormBuilder, private router: Router, private consultaCnpjService: ConsultaCnpjService) { }

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
      console.log('Formulário válido:', this.form.value)
      // Aqui você pode adicionar o código para enviar os dados do formulário
    }
  }

  buscarDadosCNPJ() {
    const cnpj = this.form.get('cnpj')?.value;
    if (cnpj) {
      this.consultaCnpjService.buscarDadosCNPJ(cnpj).subscribe(
        data => {
          console.log('Dados do CNPJ:', data);

          this.form.get('razaoSocial')?.setValue(data.razao_social);
          this.form.get('nomeFantasia')?.setValue(data.nome_fantasia);
          this.form.get('cepj')?.setValue(data.cep);
        },
        error => {
          console.error('Erro ao buscar dados do CNPJ:', error);
        }
      );
    }

  }

}
