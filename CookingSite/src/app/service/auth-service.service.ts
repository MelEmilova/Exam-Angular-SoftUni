import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginModel } from '../model/login.model';
import { RegisterModel } from '../model/register.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  path: string = 'http://localhost:3050/';
  private currentAuthtoken: string;
  isLoadding: false

  constructor(private httpClient: HttpClient) { }

  register(modelRegister: RegisterModel){
    return this.httpClient.post(`${this.path}register`, modelRegister)
  }

  login(modelLogin: LoginModel){
    return this.httpClient.post<any>(`${this.path}login`, modelLogin, {observe: 'response' as 'body'}, )
    .pipe(map(user => {
      return user
    }))

    //това работи за да ми върне със заявката и токен  -> login.component.ts
  } 

  logout(){
    const tokenOut = localStorage.getItem('token')
    return this.httpClient.post(`${this.path}logout`, {token: tokenOut})
  } 


  checkIfLoged(){
    return localStorage.getItem('token') !== null;
  }


  getToken(){
    return localStorage.getItem('token')
  }
}
