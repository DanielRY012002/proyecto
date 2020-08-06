import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/modelos/usuario';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  usuarios:Usuario[];
  constructor(private usuarioService:UsuarioService,private router:Router) { }

  ngOnInit(): void {
  }
  listarUsuarios(){
    this.usuarioService.getListarUsuarios().subscribe(data=>{
      this.usuarios=data;
    });
  }

}
