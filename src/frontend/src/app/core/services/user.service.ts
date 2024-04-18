import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private usersUrl = '';

  constructor(private http: HttpClient) {}

  //GET all users from the server
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl + '/get-all');
  }

  //GET active user from the server
  getActiveUser(): Observable<User> {
    return this.http.get<User>(this.usersUrl + '/get-me');
  }
}
