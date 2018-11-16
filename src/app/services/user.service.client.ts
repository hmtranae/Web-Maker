import { Injectable } from '@angular/core';
import { User } from '../models/user.model.client';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { release } from 'os';
// injecting service into module

@Injectable()


export class UserService {
  constructor(private http: Http) { }

	// Example: Register an account
  createUser(user: User) {
    const url = 'http://localhost:3100/api/user';
    return this.http.post(url, user).pipe(
      map((res: Response) => {
        return res.json();
      })
    );
  }

  findUserById(userId: string) {

  }

  findUserByUsername(username: string) {  

	}

  findUserByCredentials(username: string, password: string) {  

	}

  updateUser(user : User) {  

  }
}
