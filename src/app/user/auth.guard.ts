import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     // write the logic for the guard to work here
     // find out if a user has logged in or not, for this we need AuthService to be injected
     // if user has logged in , return true else return false
     if(this.authService.loggedIn){
      return true;
    }
    else{
      this.router.navigate(['logout']);
      return false;
    }
     
 }
}
