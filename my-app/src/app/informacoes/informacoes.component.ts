import { Component, OnInit } from '@angular/core';
import {UsuariosService} from '../usuarios.service'

@Component({
  selector: 'app-informacoes',
  templateUrl: './informacoes.component.html',
  styleUrls: ['./informacoes.component.css']
})
export class InformacoesComponent implements OnInit {

  constructor(private UsuariosService: UsuariosService) { }

  users : any[] = [];

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.UsuariosService.listar().subscribe(resp => this.users = resp)
  }
}
