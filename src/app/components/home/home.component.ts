import { Component, OnInit } from '@angular/core';
import {RestapiService} from '../../services/restapi.service';
import {User} from '../../Interfaces/UserInterface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: any;
  constructor(private service: RestapiService) { }

  ngOnInit(): void {
  }

  getUsers(){
    let  resp = this.service.getUsers();
    resp.subscribe(data => {
      console.log(data);
      this.users = data;
    });
  }
}
