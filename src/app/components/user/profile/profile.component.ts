import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service.client';
import { User } from 'src/app/models/user.model.client';
import { SharedService } from '../../../services/shared.service.client';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private router : Router, private userService : UserService, private sharedService : SharedService) { }

  uid : string;
  user : User = {
    username: '', 
    password: '', 
    firstName: '', 
    lastName: '', 
    email: ''
  };
  oldUsername : string;
  userError : boolean;
  successFlag : boolean;
  users : User[];

  ngOnInit() {
            this.user = this.sharedService.user;
            this.uid = this.user._id;
            this.oldUsername = this.user.username;
          }

  logout() {
    this.userService.logout().subscribe(
      (data : any) => {
        this.router.navigate(['login']);
      });
  }

  update() {
    if (this.user.username === this.oldUsername) {
      this.userService.updateUser(this.user).subscribe(
        (user : User) => {
          this.userError = false;
          this.successFlag = true;    
        }
      );
    } else {
      this.userService.findUserByUsername(this.user.username).subscribe(
        (data : any) => {
          if(!data) {
            this.userService.updateUser(this.user).subscribe(
            (user : User) => {
              this.userError = false;
              this.successFlag = true;    
            });
          } else {
            this.userError = true;
            this.successFlag = false;  
          }
        }
      )
    }
  }
}
