import { UserServiceService } from './../../../services/users/user-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users :any = []
  imageurl = "assets/img/avatars/pp.jpeg";
  constructor(private userService:UserServiceService) { }

  ngOnInit() {
    this.userService.getusers().subscribe(data =>{
      this.users = data;
    })
  }

}
