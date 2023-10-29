import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private readonly http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.apiURL}/users`);
  }

  getUserById(id: string): Observable<User> {
    return this.http.get<User>(`${environment.apiURL}/users/${id}`);
  }

  createUser(user: Omit<User, 'id'>): Observable<User> {
    return this.http.post<User>(`${environment.apiURL}/users`, user);
  }

  deleteUser(id: string): Observable<User> {
    return this.http.delete<User>(`${environment.apiURL}/users/${id}`);
  }
}
