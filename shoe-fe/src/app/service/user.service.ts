import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';
const baseUrl = 'https://62fa10b9ffd7197707e4a2a1.mockapi.io/api/v1/TB_USER';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {};

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(baseUrl);
  }

}
