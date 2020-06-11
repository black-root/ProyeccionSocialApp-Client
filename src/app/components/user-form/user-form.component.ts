import { Component, OnInit } from '@angular/core';
import {Usuario} from '../../entities/usuario.model';
import {RolUsuario} from '../../entities/rolUsuario.model';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  usuario: Usuario;

  constructor(private dataService: DataService) {
    this.usuario = new Usuario('Brayan', 'Casillas', 'brayan.casillas1996@gmail.com', '1234', new RolUsuario(1) );
    console.log(this.usuario);
  }

  ngOnInit(): void {
    this.dataService.createUser(this.usuario);
  }

}
