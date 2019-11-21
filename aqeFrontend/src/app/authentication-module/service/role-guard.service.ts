
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {

  constructor(private router: Router,
    private authService: AuthenticationService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log(this.authService.getUser(),this.authService.isUserLoggedIn())
    const currentUser = this.authService.getUser();
    const givenRole = route.data.role;
    console.log(givenRole)
    
    if(this.authService.isUserLoggedIn() && this.authService.getUserRole()===givenRole){
      return true;
      }
      this.router.navigate(['/auth/login']);
      return false;

  }

}