import {RolUsuario} from './rolUsuario.model';

export class Usuario {
  usuarioID: number;
  nombre: string;
  apellido: string;
  email: string;
  clave: string;
  rolUsuario: RolUsuario;

  constructor(nombre: string, apellido: string, email: string, clave: string, rolUsuario: RolUsuario){
    //this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.clave = clave;
    this.rolUsuario = rolUsuario;
  }

}


