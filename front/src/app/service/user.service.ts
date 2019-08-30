import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl: string = 'http://localhost:3000/api/users';

  constructor(
    private http: HttpClient
  ) { }

  get(id: number = 0): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/${id}`);
  }
  
  create(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }
  
  update(user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${user.id}`, user);
  }

  delete(user: User): Observable<User> {
    return this.http.delete<User>(`${this.apiUrl}/${user.id}`);
  }
}
