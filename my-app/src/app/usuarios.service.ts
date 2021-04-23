import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  baseURL = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<any>(`${this.baseURL}`)
  }
}
