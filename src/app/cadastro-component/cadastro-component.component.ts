
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ConsultaCnpjService } from '../consulta-cnpj.service';
import  Swal from 'sweetalert2';
import { MaskService } from '../mask.service';
import { ConsultacepService } from '../consultacep.service';



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
    });

  constructor(private fb: FormBuilder, private router: Router, private consultaCnpjService: ConsultaCnpjService,
    private ConsultacepService: ConsultacepService, public maskService: MaskService) { }

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
          this.form.get('cep')?.setValue(data.cep);
        },
        error => {
          Swal.fire({
            title: 'CNPJ Invalido!',
            text: 'Por Favor, Digite um CNPJ válido.',
            icon: 'error',
            confirmButtonText: 'OK',
            confirmButtonColor: '#f39d19',
          })
          console.error('Erro ao buscar dados do CNPJ:', error);
        }
      );
    }
  }


  buscarDadosCep() {
    const cep = this.form.get('cep')?.value;
      if (cep) {
        this.ConsultacepService.buscarCep(cep).subscribe(
          data => {
            console.log('Dados do CEP:', data);

            // Atualize os campos do formulário com os dados retornados
            // Substitua 'logradouro', 'bairro', etc. pelos nomes reais dos campos retornados pelo seu serviço
            this.form.get('logradouro')?.setValue(data.street);
            this.form.get('bairro')?.setValue(data.neighborhood);
            this.form.get('cidade')?.setValue(data.city);
            this.form.get('estado')?.setValue(data.state);
          },
          error => {
            Swal.fire({
              title: 'CEP Inválido!',
              text: 'Por Favor, Digite um CEP válido.',
              icon: 'error',
              confirmButtonText: 'OK',
              confirmButtonColor: '#f39d19',
            })
            console.error('Erro ao buscar dados do CEP:', error);
          }
        );
      }
    }






}
