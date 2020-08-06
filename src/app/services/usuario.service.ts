import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListComponent } from '../componentes/usuario/list/list.component';
import { Proyecto } from '../modelos/proyecto';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private url='http://localhost:9002';
  constructor(private http:HttpClient){}
  getListarUsuarios(){
    return this.http.get<Proyecto[]>(this.url+'/all');
  }
}