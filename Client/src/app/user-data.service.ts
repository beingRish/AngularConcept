import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from './users';


@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private url : string = '/assets/data/users.json';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<IUser[]>{
    return this.http.get<IUser[]>(this.url)
  }
}
