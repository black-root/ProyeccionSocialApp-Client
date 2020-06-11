import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Usuario} from '../entities/usuario.model';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private URL = 'http://localhost:8080/api/proyeccion-social';
  private entity = 'usuario';

  constructor(private httpClient: HttpClient) {
  }

  createUser(usuario: Usuario) {
    this.httpClient.post(`${this.URL}/${this.entity}/create`, usuario)
      .subscribe(
        response => {
          console.log('Result to create an User:', response);
        }, error => console.log('Error when create user', error)
      );
  }

  updateUser(usuario: Usuario, id: number) {
    if (id > 0) {
      this.httpClient.put(`${this.URL}/${this.entity}/update/${id}`, usuario).subscribe(
        response => {
          console.log('Result is updated:', response);
        }, error => console.log('Error when update user', error)
      );
    }
  }

  deleteUser(id: number) {
    if (id > 0) {
      this.httpClient.delete(`${this.URL}/${this.entity}/delete/${id}`).subscribe(
        response => {
          console.log('Result is deleted:', response);
        }, error => console.log('Error when delete user', error)
      );
    }
  }

  getUserById(id: number) {
    if (id > 0) {
      this.httpClient.get(`${this.URL}/${this.entity}/${id}`).subscribe(
        response => {
          console.log('Result is gotten:', response);
        }, error => console.log('Error when get user by id ', error)
      );
    }
  }

  getAllUsers() {
    this.httpClient.get(`${this.URL}/${this.entity}/all`).subscribe(
      response => {
        console.log('Result is gotten:', response);
      }, error => console.log('Error when get users', error)
    );
  }

}
