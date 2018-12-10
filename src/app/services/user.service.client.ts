import { Injectable } from '@angular/core';
import { User } from '../models/user.model.client';
import { Http, Response, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { SharedService } from './shared.service.client';
import { Router } from '@angular/router'

// injecting service into module

@Injectable()
export class UserService {
  constructor(private http: Http, private router : Router, private sharedService : SharedService) {}

  baseUrl = environment.baseUrl;

  options = new RequestOptions();

  // Example: Register an account

  // component -> client service -> server service -> client service -> component

  // register() calls a function in user client service
  // user client service sends request to user server service
  // user server service will do something and give back response

  login(username : string, password : string) {
    this.options.withCredentials = true;

    const url = this.baseUrl + '/api/login';
    const user = {
      username : username,
      password : password
    };

    return this.http.post(url, user, this.options).pipe(
      map((res : Response) => {
        return res.json();
      })
    )
  }

  loggedIn() {
    this.options.withCredentials = true;
    return this.http.post(this.baseUrl + '/api/loggedIn', '', this.options).pipe(
      map((res : Response) => {
        const user = res.json();
        if(user !== 0) {
          this.sharedService.user = user; // To share user object with all components
          return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }
      })
    );
  }

  logout() {
    this.options.withCredentials = true;
    const url = this.baseUrl + '/api/logout';
    return this.http.post(url, "", this.options).pipe(
      map((res : Response) => {
        this.sharedService.user = 0;
        return res;
      })
    )
  }

  createUser(user: User) {
    const url = this.baseUrl + '/api/user'
    return this.http.post(url, user).pipe(
      map((res: Response) => {
        return res.json()
      })
    )
    // when createUser gets a response, just return the user
  }

  findUserById(userId: string) {
    const url = this.baseUrl + '/api/user/' + userId
    return this.http.get(url).pipe(
      map((res: Response) => {
        return res.json()
      })
    )
  }

  findUserByUsername(username: string) {
    const url = this.baseUrl + '/api/user?username=' + username
    return this.http.get(url).pipe(
      map((res: Response) => {
        return res.json()
      })
    )
  }

  findUserByCredentials(username: string, password: string) {
    const url =
      this.baseUrl + '/api/user?username=' + username + '&password=' + password
    return this.http.get(url).pipe(
      map((res: Response) => {
        return res.json()
      })
    )
  }

  updateUser(user: User) {
    const url = this.baseUrl + '/api/user'
    return this.http.put(url, user).pipe(
      map((res: Response) => {
        return res.json()
      })
    )
  }
}
