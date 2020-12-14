import { Component, OnInit,Input } from '@angular/core';
import { AuthService } from '../service/auth-service.service';
import { LoginModel } from '../model/login.model'
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  implements OnInit{


  // @Input('user') user:  LoginModel

  constructor(
    public authService: AuthService,
    private router: Router,
    ) { }


  ngOnInit(){
  }

  logout(){
    this.authService.logout()
    .subscribe(data =>{
      localStorage.token = '';
      localStorage.removeItem('token')
      this.router.navigate([''])
      console.log(localStorage.token);
    })
      
  }

}
