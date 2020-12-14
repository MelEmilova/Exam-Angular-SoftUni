import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'
import { LoginModel } from 'src/app/model/login.model';
import { AuthService } from 'src/app/service/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFaild: boolean
  modelLogin: LoginModel
  resultUserEmail;
  result;
  // errMessage:string
  authtoken;
  
  constructor(
    private userServise: AuthService,
    private router: Router) {
    this.modelLogin = new LoginModel('','')
   }

  ngOnInit(): void {
  }

  login(){
    this.userServise
    .login(this.modelLogin)
    .subscribe((data:any) => {
      this.result = data;
      this.resultUserEmail = this.result.body.email
      this.authtoken = this.result.headers.get('authorization')
    
      localStorage.setItem('token', this.authtoken)

      this.router.navigate([''])
    })
      
  }






}
