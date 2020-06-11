import { Component, OnInit } from '@angular/core';
import {RestapiService} from '../../services/restapi.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  message: any;

  constructor(private service: RestapiService, private router:Router) { }

  doLogin(){
    const resp = this.service.login(this.username, this.password);
    resp.subscribe(data =>
    {
      this.message = data;
      console.log(data);
      this.router.navigate(['/home']);
    });
  }

  ngOnInit(): void {
  }

}
