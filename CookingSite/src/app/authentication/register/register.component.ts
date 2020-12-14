import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'
import { AuthService } from 'src/app/service/auth-service.service';
import { RegisterModel } from '../../model/register.model'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  modelRegister: RegisterModel
  resultReg;
 

  constructor(
    private authService: AuthService,
    private router: Router) { 
    this.modelRegister = new RegisterModel('','','')
  }

  ngOnInit(): void {
  }

  register(){
    delete this.modelRegister['confirmPassword'];

    this.authService
    .register(this.modelRegister)
    .subscribe(data => {
      this.router.navigate(['/login'])

      this.resultReg = data;
    })
  }

}
