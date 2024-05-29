import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './model/user.model';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly API_URI: string = 'http://localhost:8080/app/user'
  private readonly TOKEN: string = 'Basic bHlvbjpseW9u';

  constructor(private httpClient: HttpClient) {}

  public verify(email: string, password: string): Observable<User> {
    const headers: HttpHeaders = new HttpHeaders();
    headers.append('Authorization', this.TOKEN);
    const params: HttpParams = new HttpParams();
    params.append('email', email);
    params.append('password', password);

    return this.httpClient.post<User>(this.API_URI + "/verify", {headers, params, responseType: 'json'});
  }
}
