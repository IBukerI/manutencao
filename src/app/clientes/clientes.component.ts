import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})






export class ClientesComponent {
    constructor(private router: Router) {}

    openDialog() {
      this.router.navigate(['/cadastro']);
    }

}
