import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service.client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username : string;
  password : string;
  verifyPassword : string;

  constructor(private userService : UserService) { }

  ngOnInit() {}

  register() {
    
  }

}
