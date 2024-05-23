import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(credentials: { username: string; password: string }) {
    return this.http.post<any>('http://localhost:8000/api/login/', credentials);
  }

  logout() {
    // Implemente a lógica para logout, se necessário
  }

  register(user: { username: string; email: string; password: string }) {
    return this.http.post<any>('http://localhost:8000/api/register/', user);
  }

  // Adicione outros métodos de autenticação conforme necessário
}
