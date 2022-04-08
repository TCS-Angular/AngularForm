import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  BASE_URL = "http://localhost:3000/users/";
  deleteUser(user:any) {
    return this.http.delete(this.BASE_URL+user.id)
  }
  createUser(user: {
    firstname: string;
    lastname: string;
    gender: string;
    age: number;
  }) {
    return this.http.post(this.BASE_URL, user);
  }

  constructor(public http: HttpClient) {}
}
