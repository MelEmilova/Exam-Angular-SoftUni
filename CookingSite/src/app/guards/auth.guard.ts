import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';

import { Router } from '@angular/router'
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
   
      return this.check() 
  }

  check() {
    if (this.authService.checkIfLoged()) {
      return true
    }



    this.router.navigate(['login'])
    return false
  }

}
  
