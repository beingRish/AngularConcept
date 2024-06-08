import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { catchError, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  url = 'http://localhost:3000/enroll';

  constructor(private http: HttpClient) { }

  enroll( user: User){
    return this.http.post<any>(this.url, user)
          .pipe(catchError(this.errorHandler))
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error);
  }
}
