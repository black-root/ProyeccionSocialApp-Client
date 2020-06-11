import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  constructor(private http: HttpClient) {}

  public login(username: string, password: string){
    const headers = new HttpHeaders({  Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.get('http://localhost:8080/api/proyeccion-social/usuario/login', {headers, responseType: 'text' as 'json'});
  }

  public getUsers(){
    const username = 'PEDRO';
    const password = '1234';
    const headers = new HttpHeaders({Authorization: 'Basic' + btoa('PEDRO:1234') });
    return this.http.get('http://localhost:8080/api/proyeccion-social/usuario/all');
  }
}
