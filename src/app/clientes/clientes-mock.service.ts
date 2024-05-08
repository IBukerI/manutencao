import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesMockService {

  clientes = [
    // Adicione alguns clientes de exemplo aqui
    { id: 3, nome: 'Cliente 3', cpfCnpj: '357.028.649-20', telefone: '(61) 4567-8901', email: 'cliente3@example.com' },
    { id: 4, nome: 'Cliente 4', cpfCnpj: '892.730.145-48', telefone: '(85) 3456-7890', email: 'cliente4@example.com' },
    { id: 5, nome: 'Cliente 5', cpfCnpj: '647.812.039-90', telefone: '(21) 5678-9012', email: 'cliente5@example.com' },
    { id: 6, nome: 'Cliente 6', cpfCnpj: '120.394.857-60', telefone: '(32) 6789-0123', email: 'cliente6@example.com' },
    { id: 7, nome: 'Cliente 7', cpfCnpj: '586.920.347-19', telefone: '(19) 7890-1234', email: 'cliente7@example.com' },
    { id: 8, nome: 'Cliente 8', cpfCnpj: '345.702.981-85', telefone: '(41) 8901-2345', email: 'cliente8@example.com' },
    { id: 9, nome: 'Cliente 9', cpfCnpj: '954.872.013-27', telefone: '(47) 9012-3456', email: 'cliente9@example.com' },
    { id: 10, nome: 'Cliente 10', cpfCnpj: '219.684.573-06', telefone: '(51) 0123-4567', email: 'cliente10@example.com' },
    { id: 11, nome: 'Cliente 11', cpfCnpj: '732.905.186-11', telefone: '(27) 1234-5678', email: 'cliente11@example.com' },
    { id: 12, nome: 'Cliente 12', cpfCnpj: '568.210.937-29', telefone: '(54) 2345-6789', email: 'cliente12@example.com' },
    { id: 13, nome: 'Cliente 13', cpfCnpj: '340.871.625-81', telefone: '(92) 3456-7890', email: 'cliente13@example.com' },
    { id: 14, nome: 'Cliente 14', cpfCnpj: '935.470.281-67', telefone: '(28) 4567-8901', email: 'cliente14@example.com' },
    { id: 15, nome: 'Cliente 15', cpfCnpj: '702.819.345-82', telefone: '(68) 5678-9012', email: 'cliente15@example.com' },
    { id: 16, nome: 'Cliente 16', cpfCnpj: '210.374.695-08', telefone: '(94) 6789-0123', email: 'cliente16@example.com' },
    { id: 17, nome: 'Cliente 17', cpfCnpj: '837.529.410-34', telefone: '(86) 7890-1234', email: 'cliente17@example.com' },
    { id: 18, nome: 'Cliente 18', cpfCnpj: '456.972.038-21', telefone: '(34) 8901-2345', email: 'cliente18@example.com' },
    { id: 19, nome: 'Cliente 19', cpfCnpj: '128.735.960-52', telefone: '(95) 9012-3456', email: 'cliente19@example.com' },
    { id: 20, nome: 'Cliente 20', cpfCnpj: '691.203.847-68', telefone: '(39) 0123-4567', email: 'cliente20@example.com' },
    { id: 21, nome: 'Cliente 21', cpfCnpj: '870.514.362-91', telefone: '(31) 1234-5678', email: 'cliente21@example.com' },
    { id: 22, nome: 'Cliente 22', cpfCnpj: '219.875.604-10', telefone: '(98) 2345-6789', email: 'cliente22@example.com' },
    { id: 23, nome: 'Cliente 23', cpfCnpj: '735.891.462-09', telefone: '(79) 3456-7890', email: 'cliente23@example.com' },
    { id: 24, nome: 'Cliente 24', cpfCnpj: '694.810.357-60', telefone: '(93) 4567-8901', email: 'cliente24@example.com' },
    { id: 25, nome: 'Cliente 25', cpfCnpj: '385.720.491-83', telefone: '(26) 5678-9012', email: 'cliente25@example.com' },
    { id: 26, nome: 'Cliente 26', cpfCnpj: '910.573.284-16', telefone: '(57) 6789-0123', email: 'cliente26@example.com' },
    { id: 27, nome: 'Cliente 27', cpfCnpj: '562.490.137-25', telefone: '(35) 7890-1234', email: 'cliente27@example.com' },
    { id: 28, nome: 'Cliente 28', cpfCnpj: '349.856.271-04', telefone: '(38) 8901-2345', email: 'cliente28@example.com' },
    { id: 29, nome: 'Cliente 29', cpfCnpj: '284.916.037-59', telefone: '(94) 9012-3456', email: 'cliente29@example.com' },
    { id: 30, nome: 'Cliente 30', cpfCnpj: '517.940.682-18', telefone: '(91) 0123-4567', email: 'cliente30@example.com' },
    { id: 31, nome: 'Cliente 31', cpfCnpj: '683.495.721-06', telefone: '(53) 1234-5678', email: 'cliente31@example.com' },
    { id: 32, nome: 'Cliente 32', cpfCnpj: '129.647.850-23', telefone: '(25) 2345-6789', email: 'cliente32@example.com' },
    { id: 33, nome: 'Cliente 33', cpfCnpj: '475.839.126-40', telefone: '(96) 3456-7890', email: 'cliente33@example.com' },
    { id: 34, nome: 'Cliente 34', cpfCnpj: '826.035.914-37', telefone: '(88) 4567-8901', email: 'cliente34@example.com' },
    { id: 35, nome: 'Cliente 35', cpfCnpj: '294.617.058-21', telefone: '(75) 5678-9012', email: 'cliente35@example.com' },
    { id: 36, nome: 'Cliente 36', cpfCnpj: '501.948.273-65', telefone: '(84) 6789-0123', email: 'cliente36@example.com' },
    { id: 37, nome: 'Cliente 37', cpfCnpj: '640.529.713-48', telefone: '(43) 7890-1234', email: 'cliente37@example.com' },
    { id: 38, nome: 'Cliente 38', cpfCnpj: '189.657.240-53', telefone: '(78) 8901-2345', email: 'cliente38@example.com' },
    { id: 39, nome: 'Cliente 39', cpfCnpj: '734.826.095-37', telefone: '(97) 9012-3456', email: 'cliente39@example.com' }

    // ...
  ];

  getClientes(page = 1) {
    // Simula uma resposta do backend
    return of(this.clientes);
  }

  pesquisarClientes(termoDePesquisa: string) {
    // Simula uma pesquisa no backend
    const clientesFiltrados = this.clientes.filter(cliente =>
      cliente.nome.includes(termoDePesquisa) ||
      cliente.cpfCnpj.includes(termoDePesquisa) ||
      cliente.telefone.includes(termoDePesquisa) ||
      cliente.email.includes(termoDePesquisa)
    );
    return of(clientesFiltrados);
  }
}
