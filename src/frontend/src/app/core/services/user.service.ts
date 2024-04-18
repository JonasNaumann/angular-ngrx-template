import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private usersUrl = 'api/user';

  constructor(private http: HttpClient) {}

  //GET get active user from the server
  getActiveUser(): Observable<User> {
    return this.http.get<User>(this.usersUrl + '/get-me');
  }

  //PATCH update a user
  updateUser(updatedUser: User): Observable<User> {
    return this.http.patch<User>(this.usersUrl + '/update', updatedUser);
  }

  //DELETE delete a user
  deleteUser(userId: string): Observable<string> {
    const body = { userId };
    return this.http.delete<string>(this.usersUrl + '/delete', { body });
  }
}
