import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Usuario} from '../entities/usuario.model';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private URL = 'http://localhost:8080/api/proyeccion-social';
  private entity = 'usuario';

  constructor(private httpClient: HttpClient ) {}

  createUser(usuario: Usuario){
    this.httpClient.post(`${this.URL}/${this.entity}/create`, usuario)
      .subscribe(
        response => {
          console.log(`Result to create an User: ${response}`);
        }, error => console.log(`Error when create user ${error}`)
      );
  }
}
