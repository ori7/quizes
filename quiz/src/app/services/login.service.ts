import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoged: BehaviorSubject<boolean>;

  constructor(private httpClient: HttpClient) { 

    this.isLoged = new BehaviorSubject<boolean>(this.getToken() != null);
  }

  login(user: UserModel): Observable<object> {

    return this.httpClient.post(environment.serverUrl + 'login', user).pipe(
      catchError(errorRes => {
        this.isLoged.next(false);
        return of(undefined);
      }),
      map(tokenRes => {
        if (tokenRes) {
          window.localStorage.setItem('token', tokenRes);
          this.isLoged.next(true);
          return tokenRes;
        }
      })
    );
  }

  getToken() {
    return localStorage.getItem('token');
  }

}